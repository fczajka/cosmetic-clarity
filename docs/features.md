# Features

This document provides a detailed overview of the functionalities offered by the Cosmetic Clarity mobile application.

## 1. Home Screen

The Home screen is the first screen users encounter upon launching the application. It provides a welcoming introduction and quick access to key features.

* **Greeting:** A welcome message is displayed to the user.
* **App Bar Icon & "How to Use" Section:**
    * An icon is located in the app bar at the top of the screen, next to the application's name.
    * Tapping this icon opens a "How to Use" pop-up or screen, providing users with instructions on how to effectively use the application's features.
* **"Last Scans" Section:**
    * This section displays a horizontal carousel of the user's most recent scans.
    * Page indicators are included to show the current position within the carousel and the total number of recent scans.
* **Floating Action Button (FAB):**
    * A Floating Action Button is positioned on the right side of the screen.
    * Tapping this button initiates the ingredient scanning process, launching the camera view.

## 2. History Tab

The History tab allows users to review their past ingredient scans.

* **Scan History Display:** A list displaying all previous scans. Each entry includes:
    * **Title:** The user-defined name of the scan.
    * **Scan Date:** The date when the scan was performed.
    * **Number of Ingredients:** The total count of ingredients identified in the scan.
    * **Edit Option:** An option (e.g., an icon or button) to edit the name of the scan.
* **Deletion Functionality:** Users can delete individual scans from their history.
* **Detailed View:** Tapping on a specific scan entry navigates the user to a detailed view of that scan, showing the list of scanned ingredients and potentially other relevant information.

## 3. Search Tab

The Search tab provides access to the application's complete database of cosmetic ingredients.

* **Ingredient Database:** A comprehensive list of cosmetic ingredients is displayed.
* **Search Functionality:** A search bar allows users to search for specific ingredients within the database.
* **Detailed Ingredient Information:** Tapping on an ingredient in the list opens a detailed view, providing a description and additional information about that ingredient.
* **Like/Dislike Functionality:** Users can mark ingredients as "liked" or "disliked." These preferences are likely stored and can be accessed in the Settings tab.

## 4. Settings Tab

The Settings tab allows users to customize the application and manage their preferences.

* **Theme Customization:** Options to change the application's theme (e.g., light mode, dark mode).
* **Liked Ingredients:** A section displaying all the ingredients the user has marked as "liked." Options to view details and potentially edit this list are available.
* **Disliked Ingredients:** A section displaying all the ingredients the user has marked as "disliked." Similar to liked ingredients, users can view details and potentially edit this list.
* **About Section:** Provides information about the application, such as its version number, developer information, and potentially links to privacy policies or terms of service.

## 5. Ingredient Scanning Functionality

The ingredient scanning feature is initiated by tapping the Floating Action Button on the Home screen.

* **Camera View:** Upon activation, a full-screen camera view is presented to the user.
* **Camera Controls:**
    * **Zoom:** Users can zoom in and out using standard pinch-to-zoom gestures.
    * **Focus:** The camera allows for manual or automatic focus.
    * **Flashlight:** An option to toggle the device's flashlight on or off is available.
* **Area Selection:** After capturing an image of the ingredient list, users can select a specific area of the image containing the text they want to scan.
* **Optical Character Recognition (OCR):** Once the area is selected and confirmed, the application uses OCR technology to extract the text from the highlighted region.
* **Ingredient List Display:** The extracted text is displayed as a list of individual ingredients.
* **Ingredient Editing:** Each item in the scanned list is editable, allowing users to correct any errors that may have occurred during the OCR process.
* **Like/Dislike Option:** Each ingredient in the scanned list has options to be marked as "liked" or "disliked" (unless it is already marked).
* **Raw Text Display:** The raw, unparsed text extracted by the OCR is also displayed on this screen.
* **Scan Saving:** Users have the option to save the scanned ingredient list.
* **Scan Naming:** When saving a scan, users can provide a custom name for it, which will be displayed in the History tab.
