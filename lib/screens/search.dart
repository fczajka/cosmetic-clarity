import 'package:cosmetic_clarity/widgets/top_bar.dart';
import 'package:flutter/material.dart';

class SearchScreen extends StatelessWidget {
  const SearchScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: TopBar(title: 'Ingredients Search'),
      body: const Center(child: Text('Search Screen')),
    );
  }
}
