import 'package:cosmetic_clarity/widgets/top_bar.dart';
import 'package:flutter/material.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: TopBar(title: 'Settings'),
      body: const Center(child: Text('Settings Screen')),
    );
  }
}
