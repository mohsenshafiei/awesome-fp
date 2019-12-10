const compact = (obj) => Object.keys(obj).reduce((res, key) => (obj[key] ? { ...res, [key]: obj[key] } : res), {});

const x = {
  name: 0,
  username: 'xxxx',
  isLogin: false,
  isAuthenticated: true,
}

console.log(compact(x));
