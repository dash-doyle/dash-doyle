# Dashiell Doyle — Ficha de Personagem (Hogwarts 2099)

Página de apresentação geral para o personagem **Dashiell "Dash" Doyle** no RPG de Harry Potter ambientado no ano de 2099.

## 📁 Estrutura de Arquivos

- `index.html` — Código-fonte da página (HTML, CSS e JavaScript integrados)
- `images/` — Fotos e recursos visuais do personagem (Juraj Slafkovsky)
- `.nojekyll` — Arquivo de configuração para garantir compatibilidade com o GitHub Pages

## 🚀 Como publicar no GitHub Pages

### Método 1: Pela Interface Web do GitHub (Sem instalar nada)
1. Crie um novo repositório público no GitHub (exemplo: `dash-doyle-rpg`).
2. Clique em **Uploading an existing file**.
3. Arraste e solte o arquivo `index.html`, o arquivo `.nojekyll` e a pasta `images` inteira.
4. Clique em **Commit changes**.
5. Vá nas configurações do repositório (**Settings** > **Pages**).
6. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
7. Clique em **Save**. Em instantes o link da sua página estará ativo!

### Método 2: Pelo Terminal (Git CLI)
```bash
git init
git add .
git commit -m "Ficha de personagem Dashiell Doyle - Hogwarts 2099"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```
Em seguida, ative o GitHub Pages nas configurações (**Settings** > **Pages**) do repositório no GitHub.
