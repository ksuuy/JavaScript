JS. HW_2
// Напишите валидационный скрипт используя функции 
//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
var ValidateString = function (inputStr) {
   if (inputStr.length < 5) {    
      return "Ошибка: Минимум 5 символов в строке";
    }    if (inputStr.length > 64) {    
       return "Ошибка: Максимум 64 символа в строке";
     }}
     console.log(ValidateString("Hel"));
     console.log(ValidateString("Hello, this text has more than 64 symbols. Thanks for your attention"));

//  5. В строке должны быть буквы
  var ValidateString = function (inputStr) { 
  if (!/[a-zA-Z]/.test(inputStr)) {
   return("Ошибка: В строке должны быть буквы.");
 }}
  console.log(ValidateString(123));

//  6. Должна быть хотя бы одна буква в верхнем регистре
var ValidateString = function (inputStr) { 
   if (!/[A-Z]/.test(inputStr)) {
    return("Ошибка: Должна быть хотя бы одна буква в верхнем регистре.");
  }}
   console.log(ValidateString("oksana"));

//  7. Должна быть хотя бы одна цифра
var ValidateString = function (inputStr) { 
   if (/[^0-9]/.test(inputStr)) {
    return("Ошибка: Должна быть хотя бы одна цифра.");
  }}
  console.log(ValidateString("oksana"));

//  8. Должна быть хотя бы одна @
var ValidateString = function (inputStr) { 
   if (!/[\W_]/g.test(inputStr)) {
    return("Ошибка: Должна быть хотя бы одна @.");
  }}
  console.log(ValidateString("oksana"));

//  9. Строка не должна быть пустой
var ValidateString = function (inputStr) { 
   if (inputStr.trim() == "") {
   console.log("Ошибка: Строка не может быть пустой.");
   return;
 }}
  console.log(ValidateString(" "));
 
"C:\Program Files\nodejs\node.exe" ".\2HW JS.js"
Ошибка:Минимум 5 символов в строке
2HW JS.js:15
Ошибка: Максимум 64 символа в строке
2HW JS.js:16
Ошибка: В строке должны быть буквы.
2HW JS.js:23
Ошибка: Должна быть хотя бы одна буква в верхнем регистре.
2HW JS.js:30
Ошибка: Должна быть хотя бы одна цифра.
2HW JS.js:36
Ошибка: Должна быть хотя бы одна @.
2HW JS.js:42
Ошибка: Строка не может быть пустой.
