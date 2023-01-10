# task_list_telegram
Telegram bot for managing daily tasks. Telegram+google script

## DESCRIPTION

Simple task manager in your telegram chat (bot may be added to the groups). 
Write a message - it will be redone into a task. Press a ✅ button under any task in order to complete it (task will be deleted).

<img src="https://user-images.githubusercontent.com/110247723/211666329-d58a9cc3-e104-44cb-98e1-d38ddd8fafff.jpg" width="20%">

## INSTALLATION AND SETUP 

1. Go to the "Google Apps script" and create a new project:
2. In opened script editor create a new file and paste code from [TgScript.gs file](https://github.com/DzHolub/task_list_telegram/blob/main/TgScript.gs).
3. Save project and press "deploy" -> "New deployment". Provide all necessary confirmations (app must be available to "everyone"). Copy web-app url on the final step.

<img src="https://user-images.githubusercontent.com/110247723/210880027-77a65d7d-bbd9-42f5-96e9-564619a9c38a.png" width="20%">

4. Paste copied web-app url into webAppUrl variable
5. Create own Telegram bot via BotFather (instructions may be easily find in the internet).
6. Copy created bot's API key and paste it into apiToken variable.
7. Press "deploy" again and then "manage deployments" -> edit deployment as a new version.
8. In the script's editor window choose "setWebhook" and press "Run".
9. Enjoy
