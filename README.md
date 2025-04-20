# 🔐 Bearer CLI Demo – Escaneo de Seguridad con GitHub Actions

Este proyecto demuestra cómo integrar **[Bearer CLI](https://github.com/Bearer/bearer)** en un flujo de trabajo de GitHub Actions para realizar un escaneo de seguridad estática (**SAST**) y subir los resultados al sistema de alertas de **Code Scanning** de GitHub.

---

## 📦 Contenido

- 🛠 Integración con `bearer` CLI
- ⚙️ Escaneo automático con GitHub Actions
- 📤 Subida de resultados a GitHub Code Scanning
- 📁 Exportación en formato `SARIF`

---

## 🚀 Requisitos

Antes de comenzar, asegúrate de que tu repositorio tenga habilitadas las siguientes funciones:

1. **Settings > Security > Code security and analysis**
2. Habilitar:
   - ✅ Code Scanning Alerts
   - ✅ Dependency Graph
   - ✅ Dependabot Alerts

---

## 🧪 Cómo correr el escaneo localmente

```bash
curl -sfL https://raw.githubusercontent.com/Bearer/bearer/main/scripts/install.sh | sh
./bin/bearer scan . --format sarif --output results.sarif
