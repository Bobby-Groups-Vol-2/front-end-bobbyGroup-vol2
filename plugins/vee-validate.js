import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import Vue from "vue";
import {
  required,
  email,
  digits,
  min,
  confirmed,
} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "ไม่สามารถเว้นว่างไว้ได้",
});

// extend('alpha', {
//   ...alpha,
//   message: 'กรุณากรอกเป็นตัวอักษร',
// })

extend("email", {
  ...email,
  message: "กรุณากรอกอีเมลล์อีกครั้งให้ถูกต้อง",
});

extend("phone", {
  ...digits,
  message: "กรุณากรอกเบอร์โทรเป็นตัวเลข 10 ตัว",
});

extend("min", {
  ...min,
  message: "กรุณากรอกรหัส 8 ตัวขึ้นไป",
});

extend("confirmed", {
  ...confirmed,
  message: "รหัสผ่านไม่ตรงกัน",
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
