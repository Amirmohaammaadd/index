export const Rules = (len?: number) => ({
  require: {
    required: true,
    message: "این قسمت را خالی نگدارید",
  },

  Number: {
    pattern: /^([0-9]*)$/,
    message: "فقط عدد انگلیسی مجاز است",
  },

  NumberAndDot: {
    pattern: /^(\d*\.\d*|\d+)$/,
    message: 'فقط عدد انگلیسی و " . " مجاز است',
  },

  moreThanZero: {
    pattern: /^[1-9][0-9]*$/,
    message: "عدد باید بزرگتر از صفر باشد",
  },

  mobile: {
    pattern: /^(09)\d*$/,
    message: "فرمت وارد شده اشتباه میباشد",
  },

  len: {
    len: len,
    message: `${len} کاراکتر مجاز است`,
  },

  min: {
    min: len,
    message: ` حداقل ${len} کاراکتر مجاز است`,
  },
  max: {
    max: len,
    message: ` حداکثر ${len} کاراکتر مجاز است`,
  },

  upperCase: {
    // pattern: /^[A-Za-z0-9]+$/,
    pattern: /[A-Z]+$/,
    message: "فقط حروف انگلیسی بزرگ مجاز است",
  },

  allEnCharWithNumber: {
    // pattern: /^[A-Za-z0-9]+$/,
    pattern: /^[a-zA-Z0-9_@\$%!#&]+$/,
    message: "فقط حروف انگلیسی و عدد مجاز است",
  },

  allEnChar: {
    pattern: /([\w ]+)/,
    message: "فقط حروف انگلیسی مجاز است",
  },

  capitalCharWithNumber: {
    pattern: /[A-Z0-9]$/,
    message: `اعداد انگلیسی و حروف انگلیسی بزرگ مجاز است`,
  },

  persianChar: {
    pattern: /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/,
    message: "فقط حروف فارسی  مجاز است",
  },

  certificatKey: {
    pattern:
      /-----BEGIN CERTIFICATE-----\n([\s\S]*?)\n-----END CERTIFICATE-----/,
    message: "فرمت اشتباه میباشد",
  },

  spaceError: {
    pattern: /^\S*$/,
    message: "فاصله مجاز نیست",
  },

  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "فرمت ایمیل صحیح نمیباشد",
  },

  allCapitalCharWithNumber: {
    pattern: /^[A-Z0-9]+$/,
    message: "فقط حروف انگلیسی بزرگ و عدد مجاز است",
  },

  A: {
    pattern: /^[a-zA-Z0-9 ]+$/,
    message: "فقط حروف انگلیسی و عدد مجاز است",
  },

  persianCharAll: {
    pattern: /^[\u0600-\u06FF\s]+$/,
    message: "فقط حروف فارسی  مجاز است",
  },

  everyThingForPass: {
    // pattern: /^[a-zA-Z0-9 ]+$/,
    pattern:
      // /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{3,}$/,
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z]).{5,}$/,
    message: "رمز عبور باید شامل کارکتر خاص و عدد و حروف انگلیسی باشد",
  },

  haveUpperandLower: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
    message: "شامل حرف بزرگ و کوچک انگلیسی باشد",
  },
});
