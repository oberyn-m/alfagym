# Alfa Gym - Website

Website da Academia Alfa Gym construído com HTML, CSS e JavaScript.

## 🚀 Características

- **Design Responsivo** - Otimizado para desktop e mobile
- **Formulário de Contato** - Envio de emails via FormSubmit
- **WhatsApp Flutuante** - Botão de contato direto via WhatsApp
- **Smooth Scrolling** - Navegação suave entre seções
- **Menu Hamburger** - Menu responsivo para dispositivos móveis

## 📋 Pré-requisitos

- Um navegador web moderno
- Nenhuma dependência de servidor necessária (estático puro)

## ⚙️ Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/alfa-gym.git
cd alfa-gym
```

### 2. Configurar arquivo de config

1. Copie o arquivo `config.example.js` para `config.js`:

```bash
# Windows (PowerShell)
Copy-Item config.example.js config.js

# Linux/Mac
cp config.example.js config.js
```

2. Edite o arquivo `config.js` com suas informações:

```javascript
const CONFIG = {
  CONTACT_EMAIL: 'seu-email@exemplo.com'
};
```

### 3. Abrir o site

Como este é um site estático, você pode simplesmente:

- Abrir o arquivo `index.html` diretamente no navegador
- Ou usar um servidor local (recomendado):

```bash
# Com Live Server no VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Depois acesse: `http://localhost:8000`

## 📧 Configurar Formulário de Contato

O formulário usa **FormSubmit** para enviar emails sem backend:

1. Edite o arquivo `config.js` com seu email
2. Ao enviar o primeiro email, você receberá um link de confirmação (verifique spam)
3. Clique no link para ativar o formulário
4. Pronto! Todos os emails futuros serão enviados para seu inbox

## 📁 Estrutura do Projeto

```
alfa-gym/
├── index.html              # Arquivo HTML principal
├── style.css               # Estilos CSS
├── script.js               # JavaScript
├── config.js               # Configuração (NÃO commitar)
├── config.example.js       # Exemplo de configuração (commitar)
├── .gitignore              # Arquivos a ignorar no Git
├── images/                 # Imagens do projeto
│   ├── workout1-6.jpg
│   ├── trainer1-4.jpg
│   ├── diet1-6.jpg
│   ├── menubar.jpg
│   └── close.png
└── README.md               # Este arquivo
```

## 🎨 Personalizações

### Mudar Cor Primária

Edite `style.css`:

```css
:root {
  --prime: #FBBA00;  /* Altere para sua cor desejada */
}
```

## � Licença

Este projeto é de uso livre para a Academia Alfa Gym.

## 👥 Autor

Desenvolvido por [Isaac Matos](https://github.com/oberyn-m) com ❤️ para Alfa Gym

---

**Última atualização:** 21 de dezembro de 2025
