//characters used for spinner
const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let time = 100;
//function makes spinner animation
const spinner = (num) => {
  for (let i = 0; i < num; i++) {
    for (const char of animation) {
      setTimeout(() => {
        process.stdout.write(char);
      }, time);
      time += 200
    }
  }
};

spinner(5);