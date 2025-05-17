# Cosmetic Clarity

**Cosmetic Clarity** is a Flutter-based mobile app that uses OCR to scan cosmetic product ingredients and helps users understand them by providing detailed info, history, and personalized preferences.

## ✨ Features

* 📷 **Scan Ingredients:** Capture and extract ingredient lists using the camera.
* 🧾 **History:** View, rename, or delete past scans.
* 🔍 **Search:** Browse or search ingredients with detailed info.
* ❤️ **Like/Dislike Ingredients:** Track what you prefer or want to avoid.
* ⚙️ **Settings:** Switch themes, manage preferences, and view app info.

## 📦 Installation

```bash
git clone git@github.com:fczajka/cosmetic-clarity.git
cd cosmetic-clarity
flutter pub get
flutter run
```

> Requires Flutter SDK, Dart, and either Android Studio or VS Code.

## 📁 Project Structure

```
lib/
├── main.dart
├── presentation/   # Screens, widgets, state
├── data/           # Models, repositories, sources
├── services/       # OCR, database, API
├── common/         # UI, themes, utilities
└── routing/        # Navigation
```

## 🚀 Roadmap

* Improve OCR accuracy
* Expand ingredient database
* Add real-time scanning
* Optional: user accounts & cloud sync
