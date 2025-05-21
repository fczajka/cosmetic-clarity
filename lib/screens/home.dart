import 'package:flutter/material.dart';
import 'package:cosmetic_clarity/widgets/top_bar.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: TopBar(title: "Cosmetic Clarity"),
      body: const Center(child: Text('Home Screen')),
    );
  }
}
