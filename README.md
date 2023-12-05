# wasteof.money rss feed bot
i guess i should probably mention this is made in node.js
## setup

use your favorite package manager to install the dependencies.
#### npm:
`npm i`
#### yarn:
`yarn`

copy `.env.example` to `.env` and add your bot username & password. we'll get the token next.

### getting the token
there's probably a way to do this within the main script, but i made a secondary one. run `node token.js` and it should return a token. copy this token into .env.

after the setup, simply run `yarn run start` or `npm run start` to make a post. i recommend setting up a cron job/crontab for a certain time, do **not** use something like pm2. i did not configure it to post like that.

anyways there's probably a better way to do this but i'm too stupid and half of this code is from stack overflow. i'll be honest.

god i hope my comments were helpful, this code sucks

## License
```MIT License

Copyright (c) 2023 manufacturecopy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## some credits
thank you [wuilly](https://wasteof.money/wuilly) for the incredible [wasteof.money api documentation](https://github.com/wulliy/wasteof-docs)
thank you [imadeanaccount](https://wasteof.money/imadeanaccount) for inspiring me to make my bot open source after [you made yours](https://github.com/imadeanaccount1/onionbot)
thank you to the [axios](https://axios-http.com), [dotenv](https://www.dotenv.org), and [rss-parser](https://github.com/rbren/rss-parser) libraries. without them, this bot would not exist.
and of course, thank you [jeffalo](https://jeffalo.net) for making the amazing [wasteof.money](https://wasteof.money).
