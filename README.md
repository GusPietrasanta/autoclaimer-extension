# Chrome Extension - AutoClaimer

## Description
AutoClaimer is a straightforward Chrome extension that automatically clicks the 'Claim' button on a webpage. Originally designed to work specifically on the '/tasks' subpage of the Upwork platform, the extension's functionality can be easily modified to suit your needs. Simply edit the relevant lines in both the manifest.json and script.js files to adapt the extension to your desired webpage and button.

## Installation
To use this extension, simply download the repository and install the extension by following these steps:
1. Open the Chrome browser and go to chrome://extensions/.
2. Turn on Developer Mode.
3. Click on "Load unpacked" and select the folder containing the downloaded repository.
4. The extension will now be installed and can be used.

## How it Works
The AutoClaimer extension operates by continuously refreshing the tab and scanning the website's DOM for new tasks. When a new task appears, the extension uses JavaScript to automatically click the "Claim" button and assign the task to the user who is logged in. After the "Claim" button is clicked, the website redirects the user to the task description page. To ensure that the extension stays on the tasks listing page, the extension automatically navigates back to the previous page. If the current webpage is not a tasks listing page, the extension will do nothing. Additionally, the extension includes a random delay of between 5-7 seconds before refreshing the page to avoid detection.

## Usage
To use the AutoClaimer extension, navigate to the tasks listing page on the Upwork platform and wait for new tasks to appear. Once a new task appears, the extension will automatically click the "Claim" button to assign the task to the logged-in user. After the button is clicked, the extension will navigate back to the tasks listing page and continue to refresh the page to look for new tasks. It is important to note that the extension is designed to work specifically on the tasks listing page of the Upwork platform and will not work on any other pages.

## AutoClaimer in Action: GIF Demos

### Testing locally in a mock HTML
![Testing locally in a mock HTML](https://lh3.googleusercontent.com/pw/AJFCJaUkaWkpK0uMOBVQDyQj-1mcGb0084WhA3utfyvGSC_gTjb_tM4x-SN2QtTScfdKWUjDxdnO2Y8yFgWoOmfDfKT2i9NCXkTqYXyDDd7JmVcreAlDaQdppteWSRTj5PlzmU0eXJTcFJiaGIVoAOCHHZ0L=w1094-h918-s-no)

### Testing in Upwork site (Using "Open" instead of "Claim")
![Testing in Upwork site with "Open" button instead of "Claim"](https://lh3.googleusercontent.com/pw/AJFCJaWLsPONWnkKUCuco-g2d8LRjcVwUwUtlpHazjWteaucgkroPt7bkqmS0Rv10RhSVxylGOqx_Qjt5I63YKb8UgmYYcjGZxLzuGhEJEoZLkWst75gGVLm9HhiVJ_Iac-LMb48gRixJeDa-1ld2Z1nE0Pm=w526-h623-s-no)

## Customizing the Extension for Your Needs
To modify the AutoClaimer extension to work on a different website, you need to adjust the following settings in the extension's code:

- In the manifest.json file, change the "matches" parameter to match the URL of the website you want to use the extension on. For example, if you want to use the extension on a website with the URL https://example.com/tasks, change `"matches": ["https://www.upwork.com/nx/workflow/project/*"]` to `"matches": ["https://example.com/tasks/*"]`.

- In the script.js file, locate the line `var allButtons = document.querySelectorAll("button");`. If you are trying to automate clicking on a different HTML tag, such as a submit button, change "button" to the appropriate tag name.

- Find the line `if (allButtons[i].innerText == "Claim"){` and replace "Claim" with the text that appears on the button you want the extension to click on.

- Finally, locate the line `if (window.location.href.indexOf("/tasks/work/") > -1){` and replace "/tasks/work/" with the subpage that the website redirects you to after clicking the button or performing the action. This will allow the extension to return to the previous page and keep refreshing it to find new tasks.

Once you have made these modifications, save the files and reload the extension on the browser. The extension should now work on the new website with the desired functionality.

## Disclaimer
This extension was created for educational purposes only. The use of this extension to automatically claim tasks on a website may be a violation of the website's terms of service. The developer of this extension is not responsible for any actions taken by users of this extension.
