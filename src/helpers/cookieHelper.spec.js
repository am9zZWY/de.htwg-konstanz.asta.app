import { cookieCreator, cookieReader } from "@/helpers/cookieHelper";

test("Create normal cookie", () => {
  const cookie = cookieCreator({
    key: "foo",
    value: "bar",
    expiration: 1,
  });

  expect(cookie).toContain("foo=bar;");
});

test("Get a cookie by key", () => {
  document.cookie = cookieCreator({
    key: "foo2",
    value: "bar2",
    expiration: 1,
  });

  expect(cookieReader("foo2")).toBe("bar2");
});

test("Get multiple cookies", () => {
  document.cookie = cookieCreator({
    key: "foo2",
    value: "bar2",
    expiration: 1,
  });

  document.cookie = cookieCreator({
    key: "foo3",
    value: "bar3",
    expiration: 1,
  });

  expect(cookieReader("foo2")).toBe("bar2");
  expect(cookieReader("foo3")).toBe("bar3");
});

test("Get cookie by key that was not created by cookieCreator", () => {
  document.cookie = ";bar=foo;";

  expect(cookieReader("bar")).toBe(null);
});
