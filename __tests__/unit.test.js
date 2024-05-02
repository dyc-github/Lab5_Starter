// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2

//isPhoneNumber
test("123-456-7890 is a valid phone number", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test("123-456-7890 is a valid phone number", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test("123-456-789 is an invalid phone number", () => {
  expect(isPhoneNumber("123-456-789")).toBe(false);
});
test("123-45a-b890 is an invalid phone number", () => {
  expect(isPhoneNumber("123-45a-b890")).toBe(false);
});

//isEmail
test("test@test.com is a valid email", () => {
  expect(isEmail("test@test.com")).toBe(true);
});
test("test@test.co is a valid email", () => {
  expect(isEmail("test@test.co")).toBe(true);
});
test("test@test is an invalid email", () => {
  expect(isEmail("test@test")).toBe(false);
});
test("test@.com is an invalid email", () => {
  expect(isEmail("test@.com")).toBe(false);
});

//isStrongPassword
test("password is a strong password", () => {
  expect(isStrongPassword("password")).toBe(true);
});
test("passw0rd is a strong password", () => {
  expect(isStrongPassword("passw0rd")).toBe(true);
});
test("pas$word is not a strong password", () => {
  expect(isStrongPassword("pas$word")).toBe(false);
});
test("pas is not a strong password", () => {
  expect(isStrongPassword("pas")).toBe(false);
});

//isDate
test("20/80/2024 is a valid date", ()=>{
  expect(isDate("20/80/2024")).toBe(true);
})
test("1/1/2024 is a valid date", ()=>{
  expect(isDate("1/1/2024")).toBe(true);
})
test("20/80/202 is an invalid date", ()=>{
  expect(isDate("20/80/202")).toBe(false);
})
test("200/80/2024 is an invalid date", ()=>{
  expect(isDate("200/80/2024")).toBe(false);
})

//isHexColor
test("#ABC is a valid hex color", ()=>{
  expect(isHexColor("#ABC")).toBe(true);
})
test("#123456 is a valid hex color", ()=>{
  expect(isHexColor("#123456")).toBe(true);
})
test("#AB is not a valid hex color", ()=>{
  expect(isHexColor("#AB")).toBe(false);
})
test("ABC is not a valid hex color", ()=>{
  expect(isHexColor("ABC")).toBe(true);
})