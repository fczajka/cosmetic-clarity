import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:cosmetic_clarity/widgets/navigation_container.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cosmetic Clarity',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.lightBlue),
        textTheme: TextTheme(
          displayLarge: GoogleFonts.arvo(),
          displayMedium: GoogleFonts.arvo(),
          headlineLarge: GoogleFonts.arvo(),
          headlineMedium: GoogleFonts.arvo(),
          headlineSmall: GoogleFonts.arvo(),
          titleLarge: GoogleFonts.arvo(),
          bodyLarge: GoogleFonts.lato(),
          bodyMedium: GoogleFonts.lato(),
          bodySmall: GoogleFonts.lato(),
        ),
      ),
      home: const NavigationContainer(),
      debugShowCheckedModeBanner: false,
    );
  }
}
