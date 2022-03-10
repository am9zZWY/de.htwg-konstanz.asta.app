import { nullOrUndefined } from "@/helpers/checks";

const defaultAddress: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://htwg-app-back.herokuapp.com/";

/**
 * @description Maps http_status_code to a string
 * @param status
 */
export function statusToString(status: number): string {
  switch (status) {
    case 0:
      return "Daten noch nicht da";
    case 200:
      return "Hat einwandfrei geklappt";
    case 400:
      return "Die Anfrage war fehlerhaft";
    case 403:
      return "Deine Benutzerdaten sind nicht richtig";
    case 404:
      return "Es wurde überall gesucht, aber die Antwort ist nicht zu finden";
    case 500:
      return "Wir haben einen Fehler gemacht";
    default:
      return "Unbekannter Fehler";
  }
}

/**
 * @description Handles response and catches any possible error from backend.
 * @returns {Promise<string | object>} Can be a JSON or a string.
 * @param response
 */
export async function handleResponse(
  response: Response
): Promise<{ content: string | object; status: number }> {
  let responseData: string | object = "";
  if (response.status === 200) {
    const contentType = response.headers.get("content-type");
    if (!nullOrUndefined(contentType)) {
      if (contentType.includes("application/json")) {
        responseData = await response.json();
      } else if (
        contentType.includes("text/plain") ||
        contentType.includes("text/html")
      ) {
        responseData = await response.text();
      }
    } else {
      responseData = await response.text();
    }
  } else {
    responseData = statusToString(response.status);
  }
  return { content: responseData, status: response.status };
}

export async function post(
  postBody: string,
  address: string = defaultAddress
): Promise<{ content: any; status: number }> {
  const response = await raw_post(postBody, address);
  return handleResponse(response);
}

export async function raw_post(
  postBody: string,
  address: string = defaultAddress
): Promise<Response> {
  return fetch(address, {
    method: "POST",
    body: postBody,
  });
}

export async function get(
  args: string,
  address: string = defaultAddress
): Promise<{ content: any; status: number }> {
  const response = await fetch(address + args);
  return handleResponse(response);
}
