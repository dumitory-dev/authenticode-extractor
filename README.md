# Authenticode Digital Signature Extractor

<div align="center">

[![Deploy](https://github.com/dumitory-dev/authenticode-extractor/actions/workflows/deploy.yml/badge.svg)](https://github.com/dumitory-dev/authenticode-extractor/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green.svg)](https://vuejs.org/)
[![Quasar](https://img.shields.io/badge/Quasar-2.x-blue.svg)](https://quasar.dev/)

</div>

## Overview

A web-based tool for extracting and analyzing Authenticode Digital Signatures from Windows executable files (.exe).
Process files locally in your browser with no server uploads required.

## 🚀 Features

- **Local Processing**: All operations performed client-side
- **Multiple Output Formats**:
  - ASN.1 formatted data
  - Raw signature data

## 🛠️ Tech Stack

- Vue.js 3
- TypeScript
- Quasar Framework

## 🏃‍♂️ Quick Start

```bash
# Clone the repository
git clone https://github.com/dumitory-dev/authenticode-extractor.git

# Navigate to project directory
cd authenticode-extractor

# Install dependencies
yarn install

# Start development server
yarn dev
```

## 💡 Usage

1. Upload or drag-and-drop an .exe file
2. Select output format (ASN.1 or Raw)
3. Click "Convert" to extract the signature
4. View or download the extracted data

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
