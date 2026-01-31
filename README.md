# Landing Page – Dra. Lidiane Perdigão

Landing page profissional em **React + TypeScript + Tailwind CSS** para a Dra. Lidiane Perdigão, especialista em Direito Previdenciário.

## Estrutura do projeto

- `src/components/` – Header, Hero, Services, ServiceCard, WhyChoose, CTA, Footer
- `src/data/` – Conteúdo dos serviços e da seção “Por que escolher”
- `src/config/` – Configuração de contato (WhatsApp)
- `public/logo/` – Logotipo e símbolo
- `public/images/` – Imagens da página

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build para produção

```bash
npm run build
npm run preview
```

## Configurar WhatsApp

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   copy .env.example .env
   ```
2. Edite `.env` e preencha:
   - `VITE_WHATSAPP_NUMBER`: número com código do país, só dígitos (ex: `5511999999999`)
   - `VITE_WHATSAPP_MSG`: mensagem que aparece ao abrir o WhatsApp (opcional)

Os botões “Fale com a advogada” e “Agende sua consulta” abrem o WhatsApp com essa mensagem.

## Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
