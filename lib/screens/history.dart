import 'package:cosmetic_clarity/widgets/top_bar.dart';
import 'package:flutter/material.dart';

class HistoryScreen extends StatelessWidget {
  const HistoryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: TopBar(title: 'Scan History'),
      body: const Center(child: Text('History Screen')),
    );
  }
}
