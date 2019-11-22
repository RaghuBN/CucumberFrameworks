$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/CucumberExamples/CucumerDemo/Feature/LoginVtiger.feature");
formatter.feature({
  "name": "Testing Login To Vtiger Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking Login Functionality of Vtiger Application",
  "description": "Given: User in Home page of Vtiger Application",
  "keyword": "Scenario"
});
formatter.step({
  "name": ": Title of the Application Vtiger",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDetails.title_of_the_Application_Vtiger()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Enter user name in Edit Box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDetails.enter_user_name_in_Edit_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Enter password in textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDetails.enter_password_in_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Click on SignIn Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDetails.click_on_SignIn_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": User in Home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDetails.user_in_Home_page()"
});
formatter.result({
  "status": "passed"
});
});