# Pragyan-24 Frontend

A website for the Pragyan 2024

### Setup

- Fork and Clone the Repo
  ```
  git clone <YOUR_FORK_URL>
  ```
- Add remote upstream
  ```
  git remote add upstream <MAIN_REPO_URL>
  ```
- Run the following command to enable githooks

  ```
  yarn prepare
  ```

- Initialize the web-client submodule
  ```
  git submodule update --init
  ```
- Copy config.example.ts to config.ts
  ```
  cp ./src/config/config.example.ts ./src/config/config.ts
  ```
- Install

  ```
  yarn install
  ```

- Run
  ```
  yarn run dev
  ```
  _Your site will be running in port 3000_
