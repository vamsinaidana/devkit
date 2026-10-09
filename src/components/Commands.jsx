import  { useState } from "react";

const Commands = () => {
   const [copied, setCopied] = useState("");

  const copyCommand = (command) => {
    navigator.clipboard.writeText(command);

    setCopied(command);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };


    const copyComand = async (command, id) => {
    await navigator.clipboard.writeText(command);

    setCopied(id);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <div>
         <section className="developer-quick-section py-4" id="vs-code-installation-cmds-git-fontawsome-react-tailwind-bootstrap-nodejs-expressjs-mongodb-mysql-python-django-java-springboot-github-git-angular"  >
      <div className="container-fluid px-3 px-lg-4" >
      
      {/* Heading */}
          <div className="project-heading text-center mb-4 mb-md-5" id="cammands">

          <span className="project-badge right-animation">
            <i className="fa-solid fa-code"></i>
            Developer Commands
          </span>

          <h2>
            Commands Deployment Tools
          </h2>

          <p>
            Essential tools and platforms developers use to build,
            test, design and deploy modern applications.
          </p>

        </div>

        <div className="row g-3">

          {/* =====================================
              GIT COMMANDS
          ====================================== */}
          <div className="cmd-bg col-12 col-lg-4">

            <div className="quick-panel h-100 ">

              {/* Header */}
              <div className="quick-panel-header" id="git-commands" >
                <div className="quick-title">
                  <div className="quick-title-icon git-title-icon">
                    <i className="fa-brands fa-git-alt"></i>
                  </div>

                  <h5>Git &amp; GitHub Quick Commands</h5>
                </div>
              </div>


              {/* Commands */}
              <div className="git-command-list">

                {/* git init */}
                <div className="git-command-item">
                  <code>git init</code>

                  <button
                    className={`git-copy-btn ${
                      copied === "git init" ? "copied" : ""
                    }`}
                    onClick={() => copyCommand("git init")}
                  >
                    <i
                      className={`fa-solid ${
                        copied === "git init"
                          ? "fa-check"
                          : "fa-copy"
                      }`}
                    ></i>

                    {copied === "git init" ? "Copied" : "Copy"}
                  </button>
                </div>


                {/* git add */}
                <div className="git-command-item">
                  <code>git add .</code>

                  <button
                    className={`git-copy-btn ${
                      copied === "git add ." ? "copied" : ""
                    }`}
                    onClick={() => copyCommand("git add .")}
                  >
                    <i
                      className={`fa-solid ${
                        copied === "git add ."
                          ? "fa-check"
                          : "fa-copy"
                      }`}
                    ></i>

                    {copied === "git add ." ? "Copied" : "Copy"}
                  </button>
                </div>


                {/* git commit */}
                <div className="git-command-item">
                  <code>git commit -m "message"</code>

                  <button
                    className={`git-copy-btn ${
                      copied === 'git commit -m "message"'
                        ? "copied"
                        : ""
                    }`}
                    onClick={() =>
                      copyCommand('git commit -m "message"')
                    }
                  >
                    <i
                      className={`fa-solid ${
                        copied === 'git commit -m "message"'
                          ? "fa-check"
                          : "fa-copy"
                      }`}
                    ></i>

                    {copied === 'git commit -m "message"'
                      ? "Copied"
                      : "Copy"}
                  </button>
                </div>


                {/* git branch */}
                <div className="git-command-item">
                  <code>git branch -M main</code>

                  <button
                    className={`git-copy-btn ${
                      copied === "git branch -M main" ? "copied" : ""
                    }`}
                    onClick={() => copyCommand("git branch -M main")}
                  >
                    <i
                      className={`fa-solid ${
                        copied === "git branch"
                          ? "fa-check"
                          : "fa-copy"
                      }`}
                    ></i>

                    {copied === "git branch" ? "Copied" : "Copy"}
                  </button>
                </div>


                {/* git push */}
                <div className="git-command-item">
                  <code>git push -u origin main</code>

                  <button
                    className={`git-copy-btn ${
                      copied === "git push -u origin main"
                        ? "copied"
                        : ""
                    }`}
                    onClick={() =>
                      copyCommand("git push -u origin main")
                    }
                  >
                    <i
                      className={`fa-solid ${
                        copied === "git push -u origin main"
                          ? "fa-check"
                          : "fa-copy"
                      }`}
                    ></i>

                    {copied === "git push -u origin main"
                      ? "Copied"
                      : "Copy"}
                  </button>
                </div>


                {/* git pull */}
                 <div className="git-command-item">
                  <code> For more visit git commands <i className="fa-solid fa-arrow-right"></i></code>

                   
                </div>

                

              </div>

            </div>
          </div>


          {/* =====================================
              SETUP GUIDE
          ====================================== */}
          <div className="col-12 col-lg-5" id="vs-code-installation-cmds">

            <div className="quick-panel h-100">

              {/* Header */}
              <div className="quick-panel-header setup-header">

                <div className="quick-title">

                  <div className="quick-title-icon setup-title-icon">
                    <i className="fa-solid fa-cubes"></i>
                  </div>

                  <h5>
                    Setup Your Development Environment & Deployment
                  </h5>

                </div>

              </div>


              {/* Development Flow */}
              <div className="setup-flow">

                {/* VS Code */}
                <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#vscode">
                  <div className="setup-tool-icon vscode-icon">
                    <i className="fa-solid fa-code"></i>
                  </div>

                  <span>VS Code extns</span>
                </div>
                <div class="modal fade" id="vscode" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <section className="vscode-section py-5" id="vscode-extensions">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <span className="extension-badge">
            <i className="fa-solid fa-puzzle-piece me-2"></i>
            Developer Tools
          </span>

          <h2 className="extension-heading mt-3">
            VS Code <span>Extensions</span>
          </h2>

          <p className="extension-description">
            Useful Visual Studio Code extensions to make your
            development workflow faster and easier.
          </p>
        </div>


     <div className="row g-4">

  {/* 1 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon purple">
        <i className="fa-brands fa-react"></i>
      </div>

      <div className="extension-content">
        <h5>ES7+ React Snippets</h5>
        <p>
          Quickly create React components using
          useful shortcuts like rafce.
        </p>

        <span className="extension-tag">React</span>
      </div>
    </div>
  </div>


  {/* 2 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon blue">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
      </div>

      <div className="extension-content">
        <h5>Prettier</h5>
        <p>
          Automatically format your code and
          keep your project clean.
        </p>

        <span className="extension-tag">Formatting</span>
      </div>
    </div>
  </div>


  {/* 3 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon green">
        <i className="fa-solid fa-code"></i>
      </div>

      <div className="extension-content">
        <h5>Auto Rename Tag</h5>
        <p>
          Automatically rename matching HTML
          and JSX opening and closing tags.
        </p>

        <span className="extension-tag">HTML / JSX</span>
      </div>
    </div>
  </div>


  {/* 4 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon orange">
        <i className="fa-solid fa-tags"></i>
      </div>

      <div className="extension-content">
        <h5>Auto Close Tag</h5>
        <p>
          Automatically add closing tags while
          writing HTML and JSX.
        </p>

        <span className="extension-tag">HTML</span>
      </div>
    </div>
  </div>


  {/* 5 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon red">
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>

      <div className="extension-content">
        <h5>Error Lens</h5>
        <p>
          Display errors and warnings directly
          beside your code.
        </p>

        <span className="extension-tag">Debugging</span>
      </div>
    </div>
  </div>


  {/* 6 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon cyan">
        <i className="fa-solid fa-folder-tree"></i>
      </div>

      <div className="extension-content">
        <h5>Path Intellisense</h5>
        <p>
          Autocomplete file paths while importing
          images, CSS and components.
        </p>

        <span className="extension-tag">Imports</span>
      </div>
    </div>
  </div>


  {/* 7 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon pink">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="extension-content">
        <h5>CSS Peek</h5>
        <p>
          Quickly find CSS definitions from your
          HTML or JSX classes.
        </p>

        <span className="extension-tag">CSS</span>
      </div>
    </div>
  </div>


  {/* 8 */}
  <div className="col-md-6">
    <div className="extension-card">
      <div className="extension-icon yellow">
        <i className="fa-brands fa-git-alt"></i>
      </div>

      <div className="extension-content">
        <h5>GitLens</h5>
        <p>
          Explore Git history, commits, authors
          and changes inside VS Code.
        </p>

        <span className="extension-tag">Git</span>
      </div>
    </div>
  </div>

</div>
      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                <div className="setup-arrow">
                  <i  style={{color:"red"}} className="fa-solid fa-arrow-right"></i>
                </div>


                {/* Git */}
                <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#gitcmd">
                  <div className="setup-tool-icon git-icon">
                    <i className="fa-brands fa-git-alt"></i>
                  </div>

                  <span>Git cmds</span>
                </div>
                <div class="modal fade" id="gitcmd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <section className="git-section py-5" id="git-commands">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="extension-badge">
            <i className="fa-brands fa-git-alt me-2"></i>
            Developer Essentials
          </span>

          <h2 className="extension-heading mt-3">
            Git <span>Commands</span>
          </h2>

          <p className="extension-description">
            Essential Git commands every developer should know
            to manage and collaborate on projects.
          </p>

        </div>


        {/* Commands */}
        <div className="row g-4">

          {/* Command 1 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon orange">
                <i className="fa-solid fa-download"></i>
              </div>

              <div className="extension-content">

                <h5>Git Clone</h5>

                <p>
                  Copy an existing repository from GitHub
                  to your local computer.
                </p>

                <div className="git-command-box">
                  <code>git clone &lt;repository-url&gt;</code>

                  
                </div>

              </div>

            </div>
          </div>


          {/* Command 2 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon blue">
                <i className="fa-solid fa-code-branch"></i>
              </div>

              <div className="extension-content">

                <h5>Git Init</h5>

                <p>
                  Initialize a new Git repository inside
                  your project folder.
                </p>

                <div className="git-command-box">
                  <code>git init</code>

                
                </div>

              </div>

            </div>
          </div>


          {/* Command 3 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon green">
                <i className="fa-solid fa-plus"></i>
              </div>

              <div className="extension-content">

                <h5>Git Add</h5>

                <p>
                  Add files to the staging area before
                  committing your changes.
                </p>

                <div className="git-command-box">
                  <code>git add .</code>
 
                </div>

              </div>

            </div>
          </div>


          {/* Command 4 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon purple">
                <i className="fa-solid fa-code-commit"></i>
              </div>

              <div className="extension-content">

                <h5>Git Commit</h5>

                <p>
                  Save your staged changes with a
                  descriptive commit message.
                </p>

                <div className="git-command-box">
                  <code>git commit -m "message"</code>

                  
                </div>

              </div>

            </div>
          </div>


          {/* Command 5 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon cyan">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>

              <div className="extension-content">

                <h5>Git Push</h5>

                <p>
                  Upload your local commits to the
                  remote repository.
                </p>

                <div className="git-command-box">
                  <code>git add .<br></br>
git commit -m "Updated DevKit"<br></br>
git push</code>

                  
                </div>

              </div>

            </div>
          </div>


          {/* Command 6 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon red">
                <i className="fa-solid fa-cloud-arrow-down"></i>
              </div>

              <div className="extension-content">

                <h5>Git Pull</h5>

                <p>
                  Fetch and merge the latest changes
                  from the remote repository.
                </p>

                <div className="git-command-box">
                  <code>git pull origin main</code>

                  
                </div>

              </div>

            </div>
          </div>


          {/* Command 7 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon yellow">
                <i className="fa-solid fa-code-fork"></i>
              </div>

              <div className="extension-content">

                <h5>Git Branch</h5>

                <p>
                  Create a new branch to work on features
                  independently.
                </p>

                <div className="git-command-box">
                  <code>git branch feature-name</code>

                  
                </div>

              </div>

            </div>
          </div>


          {/* Command 8 */}
          <div className="col-md-6">
            <div className="extension-card">

              <div className="extension-icon pink">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>

              <div className="extension-content">

                <h5>Git Merge</h5>

                <p>
                  Combine changes from one branch into
                  another branch.
                </p>

                <div className="git-command-box">
                  <code>git merge branch-name</code>

                  
                </div>

              </div>

            </div>
          </div>


        </div>
      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>


                {/* Node */}
                <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#fontas">
                  <div className="setup-tool-icon node-icon">
<i class="fa-brands fa-square-font-awesome"></i>                
  </div>
   {/* model coontent starts */}
<div class="modal fade" id="fontas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-solid fa-icons"></i>
          </div>

          <h2>Font Awesome Commands</h2>

          <p>
            Useful commands to install and use Font Awesome icons in React
            projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install Font Awesome</h5>
          </div>

          <div className="react-command-box">

            <code>
              npm install @fortawesome/fontawesome-free
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install @fortawesome/fontawesome-free",
                  "install"
                )
              }
            >
              <i
                className={
                  copied === "install"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "install" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 2 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-file-import"></i>
            <h5>Import Font Awesome</h5>
          </div>

          <div className="react-command-box">

            <code>
              import "@fortawesome/fontawesome-free/css/all.min.css";
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'import "@fortawesome/fontawesome-free/css/all.min.css";',
                  "import"
                )
              }
            >
              <i
                className={
                  copied === "import"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "import" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 3 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Solid Icon</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<i className=\"fa-solid fa-house\"></i>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<i className="fa-solid fa-house"></i>',
                  "solid"
                )
              }
            >
              <i
                className={
                  copied === "solid"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "solid" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 4 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-regular fa-star"></i>
            <h5>Regular Icon</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<i className=\"fa-regular fa-star\"></i>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<i className="fa-regular fa-star"></i>',
                  "regular"
                )
              }
            >
              <i
                className={
                  copied === "regular"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "regular" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 5 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-brands fa-github"></i>
            <h5>Brand Icon</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<i className=\"fa-brands fa-github\"></i>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<i className="fa-brands fa-github"></i>',
                  "brand"
                )
              }
            >
              <i
                className={
                  copied === "brand"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "brand" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 6 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-icons"></i>
            <h5>Icon with Size</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<i className=\"fa-solid fa-house fa-2x\"></i>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<i className="fa-solid fa-house fa-2x"></i>',
                  "size"
                )
              }
            >
              <i
                className={
                  copied === "size"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "size" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 7 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-spin fa-spinner"></i>
            <h5>Animated Icon</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<i className=\"fa-solid fa-spinner fa-spin\"></i>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<i className="fa-solid fa-spinner fa-spin"></i>',
                  "animation"
                )
              }
            >
              <i
                className={
                  copied === "animation"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "animation" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 8 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-palette"></i>
            <h5>Icon with Color</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<i className=\"fa-solid fa-heart text-danger\"></i>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<i className="fa-solid fa-heart text-danger"></i>',
                  "color"
                )
              }
            >
              <i
                className={
                  copied === "color"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "color" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 9 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h5>Search Font Awesome Icons</h5>
          </div>

          <div className="react-command-box">

            <code>
              https://fontawesome.com/icons
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "https://fontawesome.com/icons",
                  "search"
                )
              }
            >
              <i
                className={
                  copied === "search"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "search" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/* model coontent ends */}

                  <span>Font Awesome</span>
                </div>

              
               
               
                <div className="setup-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>


                {/* React */}
                <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#reactcommand">
                  <div className="setup-tool-icon react-icon">
                    <i className="fa-brands fa-react"></i>
                  </div>

                  <span>React</span>
                </div>
                {/* model coontent starts */}

 
<div class="modal fade" id="reactcommand" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-brands fa-react"></i>
          </div>

          <h2>React & VS Code Commands</h2>

          <p>
            Useful commands to create, run and manage React projects
            directly from VS Code terminal.
          </p>

        </div>


        {/* Command Card 1 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-folder-plus"></i>

            <div>
              <h5>Create React Project</h5>
              <p>Create a new React project using Vite.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>npm create vite@latest my-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm create vite@latest my-app",
                  "create"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "create"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "create" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 2 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-right-to-bracket"></i>

            <div>
              <h5>Go Inside Project</h5>
              <p>Move into your React project folder.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>cd my-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("cd my-app", "cd")
              }
            >
              <i
                className={`fa-solid ${
                  copied === "cd"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "cd" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 3 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>

            <div>
              <h5>Install Dependencies</h5>
              <p>Install all required project packages.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>npm install</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm install", "install")
              }
            >
              <i
                className={`fa-solid ${
                  copied === "install"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "install" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 4 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>

            <div>
              <h5>Start Development Server</h5>
              <p>Run the React application locally.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>npm run dev</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm run dev", "dev")
              }
            >
              <i
                className={`fa-solid ${
                  copied === "dev"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "dev" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 5 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>

            <div>
              <h5>Install Bootstrap</h5>
              <p>Install Bootstrap in your React project.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>npm install bootstrap</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install bootstrap",
                  "bootstrap"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "bootstrap"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "bootstrap"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 6 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-brands fa-github"></i>

            <div>
              <h5>Install Git</h5>
              <p>Initialize Git repository for your project.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>git init</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("git init", "git")
              }
            >
              <i
                className={`fa-solid ${
                  copied === "git"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "git" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 7 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-code-branch"></i>

            <div>
              <h5>Check Git Status</h5>
              <p>Check modified and untracked files.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>git status</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("git status", "status")
              }
            >
              <i
                className={`fa-solid ${
                  copied === "status"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "status" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 8 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-upload"></i>

            <div>
              <h5>Push Code to GitHub</h5>
              <p>Push your project code to GitHub.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>git push origin main</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "git push origin main",
                  "push"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "push"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "push" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 9 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-hammer"></i>

            <div>
              <h5>Build React Project</h5>
              <p>Create the production build of your application.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>npm run build</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm run build",
                  "build"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "build"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "build" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* Command Card 10 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>

            <div>
              <h5>Remove Package</h5>
              <p>Remove an installed npm package.</p>
            </div>
          </div>

          <div className="react-command-box">

            <code>npm uninstall package-name</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm uninstall package-name",
                  "uninstall"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "uninstall"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "uninstall"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>
      
{/* Install React Router */}

<div className="react-command-card">
  <div className="react-command-title">
    <i className="fa-solid fa-route"></i>

    <div>
      <h5>Install React Router</h5>
      <p>Install React Router for page navigation.</p>
    </div>
  </div>

  <div className="react-command-box">
    <code>npm install react-router-dom</code>

    <button
      className="react-copy-btn"
      onClick={() =>
        copyCommand(
          "npm install react-router-dom",
          "router-install"
        )
      }
    >
      <i
        className={`fa-solid ${
          copied === "router-install"
            ? "fa-check"
            : "fa-copy"
        }`}
      ></i>

      {copied === "router-install" ? "Copied!" : "Copy"}
    </button>
  </div>
</div>


 

 


{/* Preview Production Build */}

<div className="react-command-card">
  <div className="react-command-title">
    <i className="fa-solid fa-eye"></i>

    <div>
      <h5>Import</h5>
      <p>in to your jsx file</p>
    </div>
  </div>

  <div className="react-command-box">
    <code>createBrowserRouter,<br></br>
  RouterProvider,<br></br>
  Link,<br></br>
  NavLink,<br></br>
  Outlet,<br></br>
  useParams,<br></br>
  useNavigate</code>

   
  </div>
</div>
 


      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/* model coontent ends */}

                <div className="setup-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>


                {/* Tailwind */}
                <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#tailwindcommand">
                  <div className="setup-tool-icon tailwind-icon">
                    <i className="fa-solid fa-wind"></i>
                  </div>

                  <span>Tailwind</span>
                </div>


                {/* model coontent starts */}

                <div class="modal fade" id="tailwindcommand" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-solid fa-wind"></i>
          </div>

          <h2>Tailwind CSS Commands</h2>

          <p>
            Useful commands to install, configure and use Tailwind CSS
            in your projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install Tailwind CSS</h5>
          </div>

          <div className="react-command-box">

            <code>
              npm install tailwindcss @tailwindcss/vite
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install tailwindcss @tailwindcss/vite",
                  "install"
                )
              }
            >
              <i
                className={
                  copied === "install"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "install" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 2 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Initialize Tailwind</h5>
          </div>

          <div className="react-command-box">

            <code>
              npx tailwindcss init
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npx tailwindcss init",
                  "init"
                )
              }
            >
              <i
                className={
                  copied === "init"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "init" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 3 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Tailwind CSS Import</h5>
          </div>

          <div className="react-command-box">

            <code>
              @import "tailwindcss";
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '@import "tailwindcss";',
                  "import"
                )
              }
            >
              <i
                className={
                  copied === "import"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "import" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 4 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>
            <h5>Run Development Server</h5>
          </div>

          <div className="react-command-box">

            <code>
              npm run dev
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm run dev",
                  "dev"
                )
              }
            >
              <i
                className={
                  copied === "dev"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "dev" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 5 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>
            <h5>Create Tailwind Project</h5>
          </div>

          <div className="react-command-box">

            <code>
              npm create vite@latest my-app
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm create vite@latest my-app",
                  "create"
                )
              }
            >
              <i
                className={
                  copied === "create"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "create" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 6 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-mobile-screen"></i>
            <h5>Responsive Classes</h5>
          </div>

          <div className="react-command-box">

            <code>
              sm: md: lg: xl: 2xl:
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "sm: md: lg: xl: 2xl:",
                  "responsive"
                )
              }
            >
              <i
                className={
                  copied === "responsive"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "responsive" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 7 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-palette"></i>
            <h5>Background Color</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<div className=\"bg-blue-500\"></div>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<div className="bg-blue-500"></div>',
                  "background"
                )
              }
            >
              <i
                className={
                  copied === "background"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "background" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 8 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-font"></i>
            <h5>Text Color</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<p className=\"text-blue-600\">Hello</p>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<p className="text-blue-600">Hello</p>',
                  "text"
                )
              }
            >
              <i
                className={
                  copied === "text"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "text" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 9 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-arrows-up-down-left-right"></i>
            <h5>Flexbox</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<div className=\"flex items-center justify-center\"></div>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<div className="flex items-center justify-center"></div>',
                  "flex"
                )
              }
            >
              <i
                className={
                  copied === "flex"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "flex" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* 10 */}
        <div className="react-command-card">

          <div className="react-command-title">
            <i className="fa-solid fa-table-cells"></i>
            <h5>Grid Layout</h5>
          </div>

          <div className="react-command-box">

            <code>
              {"<div className=\"grid grid-cols-3 gap-4\"></div>"}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  '<div className="grid grid-cols-3 gap-4"></div>',
                  "grid"
                )
              }
            >
              <i
                className={
                  copied === "grid"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "grid" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/* model coontent ends */}

                <div className="setup-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>


                {/* Bootstrap */}
                <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#bootstrapcommand" >
                  <div className="setup-tool-icon bootstrap-icon">
                    <i className="fa-brands fa-bootstrap"></i>
                  </div>

                  <span>Bootstrap</span>
                </div>

                <div className="setup-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                {/* bootstrap model content start */}

<div class="modal fade" id="bootstrapcommand" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-brands fa-bootstrap"></i>
          </div>

          <h2>Bootstrap Commands</h2>

          <p>
            Useful commands to install and configure Bootstrap
            in your React project.
          </p>

        </div>


        {/* 1. Install Bootstrap */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-solid fa-download"></i>

            <div>
              <h5>Install Bootstrap</h5>
              <p>Install Bootstrap in your React project.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>npm install bootstrap</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install bootstrap",
                  "bootstrap"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "bootstrap"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "bootstrap"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>


        {/* 2. Install Bootstrap Icons */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-solid fa-icons"></i>

            <div>
              <h5>Install Bootstrap Icons</h5>
              <p>Install Bootstrap Icons for your project.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>npm install bootstrap-icons</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install bootstrap-icons",
                  "icons"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "icons"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "icons"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>


        {/* 3. Import Bootstrap CSS */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-solid fa-file-code"></i>

            <div>
              <h5>Import Bootstrap CSS</h5>
              <p>Import Bootstrap CSS inside main.jsx.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>
              import "bootstrap/dist/css/bootstrap.min.css";
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'import "bootstrap/dist/css/bootstrap.min.css";',
                  "css"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "css"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "css"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>


        {/* 4. Import Bootstrap JS */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-brands fa-js"></i>

            <div>
              <h5>Import Bootstrap JavaScript</h5>
              <p>Import Bootstrap JavaScript inside main.jsx.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>
              import "bootstrap/dist/js/bootstrap.bundle.min.js";
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'import "bootstrap/dist/js/bootstrap.bundle.min.js";',
                  "js"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "js"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "js" ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>


        {/* 5. Install Bootstrap + Icons */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-solid fa-boxes-stacked"></i>

            <div>
              <h5>Install Bootstrap & Icons</h5>
              <p>Install Bootstrap and Bootstrap Icons together.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>
              npm install bootstrap bootstrap-icons
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install bootstrap bootstrap-icons",
                  "both"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "both"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "both"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>


        {/* 6. Update Bootstrap */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-solid fa-arrows-rotate"></i>

            <div>
              <h5>Update Bootstrap</h5>
              <p>Update Bootstrap to the latest installed version.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>npm update bootstrap</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm update bootstrap",
                  "update"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "update"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "update"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>


        {/* 7. Remove Bootstrap */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-solid fa-trash"></i>

            <div>
              <h5>Remove Bootstrap</h5>
              <p>Remove Bootstrap from your React project.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>npm uninstall bootstrap</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm uninstall bootstrap",
                  "remove"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "remove"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "remove"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>


        {/* 8. Check Bootstrap */}
        <div className="react-command-card">

          <div className="react-command-title">

            <i className="fa-solid fa-circle-check"></i>

            <div>
              <h5>Check Installed Bootstrap</h5>
              <p>Check the Bootstrap version installed in the project.</p>
            </div>

          </div>

          <div className="react-command-box">

            <code>npm list bootstrap</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm list bootstrap",
                  "check"
                )
              }
            >
              <i
                className={`fa-solid ${
                  copied === "check"
                    ? "fa-check"
                    : "fa-copy"
                }`}
              ></i>

              {copied === "check"
                ? "Copied!"
                : "Copy"}
            </button>

          </div>

        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/* model coontent ends */}


                {/* GitHub */}
                <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#pythc">
                  <div className="setup-tool-icon github-icon">
                    <i style={{color:"yellowgreen"}} className="fa-brands fa-python"></i>
                  </div>

                  <span>Python</span>
                </div>
  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>
                {/* model coontent */}


<div class="modal fade" id="pythc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-brands fa-python"></i>
          </div>

          <h2>Python Commands</h2>

          <p>
            Useful Python commands to create, run and manage Python projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Check Python Version</h5>
          </div>

          <div className="react-command-box">
            <code>python --version</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("python --version", "version")}
            >
              <i
                className={
                  copied === "version"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Run Python File</h5>
          </div>

          <div className="react-command-box">
            <code>python app.py</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("python app.py", "run")}
            >
              <i
                className={
                  copied === "run"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "run" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>
            <h5>Create Virtual Environment</h5>
          </div>

          <div className="react-command-box">
            <code>python -m venv venv</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python -m venv venv",
                  "venv"
                )}
            >
              <i
                className={
                  copied === "venv"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "venv" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-power-off"></i>
            <h5>Activate Virtual Environment</h5>
          </div>

          <div className="react-command-box">
            <code>venv\Scripts\activate</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "venv\\Scripts\\activate",
                  "activate"
                )}
            >
              <i
                className={
                  copied === "activate"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "activate" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install Package</h5>
          </div>

          <div className="react-command-box">
            <code>pip install package-name</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "pip install package-name",
                  "install"
                )}
            >
              <i
                className={
                  copied === "install"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "install" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list"></i>
            <h5>List Installed Packages</h5>
          </div>

          <div className="react-command-box">
            <code>pip list</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("pip list", "list")}
            >
              <i
                className={
                  copied === "list"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "list" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrow-up"></i>
            <h5>Upgrade pip</h5>
          </div>

          <div className="react-command-box">
            <code>python -m pip install --upgrade pip</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python -m pip install --upgrade pip",
                  "upgrade"
                )}
            >
              <i
                className={
                  copied === "upgrade"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "upgrade" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Uninstall Package</h5>
          </div>

          <div className="react-command-box">
            <code>pip uninstall package-name</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "pip uninstall package-name",
                  "uninstall"
                )}
            >
              <i
                className={
                  copied === "uninstall"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "uninstall" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-file-lines"></i>
            <h5>Create requirements.txt</h5>
          </div>

          <div className="react-command-box">
            <code>pip freeze &gt; requirements.txt</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "pip freeze > requirements.txt",
                  "requirements"
                )}
            >
              <i
                className={
                  copied === "requirements"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "requirements" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-file-import"></i>
            <h5>Install requirements.txt</h5>
          </div>

          <div className="react-command-box">
            <code>pip install -r requirements.txt</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "pip install -r requirements.txt",
                  "requirements-install"
                )}
            >
              <i
                className={
                  copied === "requirements-install"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "requirements-install" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Open Python Shell</h5>
          </div>

          <div className="react-command-box">
            <code>python</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("python", "shell")}
            >
              <i
                className={
                  copied === "shell"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "shell" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Install Django</h5>
          </div>

          <div className="react-command-box">
            <code>pip install django</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "pip install django",
                  "django"
                )}
            >
              <i
                className={
                  copied === "django"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "django" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>
                {/* model coontent */}

                        {/* commmm */}
                 <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#javc">
                  <div className="setup-tool-icon github-icon">
                    <i style={{color:"red"}} className="fa-brands fa-java"></i>
                  </div>

                  <span>Java</span>
                </div>
                  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>

                {/* model coontent */}
<div class="modal fade" id="javc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-brands fa-java"></i>
          </div>

          <h2>Java Commands</h2>

          <p>
            Useful Java commands to compile, run and manage Java projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Check Java Version</h5>
          </div>

          <div className="react-command-box">
            <code>java --version</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("java --version", "version")}
            >
              <i
                className={
                  copied === "version"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Check Java Compiler Version</h5>
          </div>

          <div className="react-command-box">
            <code>javac --version</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("javac --version", "javac-version")}
            >
              <i
                className={
                  copied === "javac-version"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "javac-version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-file-code"></i>
            <h5>Compile Java File</h5>
          </div>

          <div className="react-command-box">
            <code>javac Main.java</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("javac Main.java", "compile")}
            >
              <i
                className={
                  copied === "compile"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "compile" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>
            <h5>Run Java Program</h5>
          </div>

          <div className="react-command-box">
            <code>java Main</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("java Main", "run")}
            >
              <i
                className={
                  copied === "run"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "run" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h5>Create Java Project Folder</h5>
          </div>

          <div className="react-command-box">
            <code>mkdir JavaProject</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mkdir JavaProject", "mkdir")
              }
            >
              <i
                className={
                  copied === "mkdir"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "mkdir" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-open"></i>
            <h5>Open Project Folder</h5>
          </div>

          <div className="react-command-box">
            <code>cd JavaProject</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("cd JavaProject", "cd")
              }
            >
              <i
                className={
                  copied === "cd"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "cd" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>
            <h5>Create Maven Project</h5>
          </div>

          <div className="react-command-box">
            <code>mvn archetype:generate</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "mvn archetype:generate",
                  "maven-create"
                )
              }
            >
              <i
                className={
                  copied === "maven-create"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "maven-create" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-gears"></i>
            <h5>Maven Build</h5>
          </div>

          <div className="react-command-box">
            <code>mvn clean install</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mvn clean install", "maven-build")
              }
            >
              <i
                className={
                  copied === "maven-build"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "maven-build" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>
            <h5>Run Maven Project</h5>
          </div>

          <div className="react-command-box">
            <code>mvn spring-boot:run</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "mvn spring-boot:run",
                  "spring-run"
                )
              }
            >
              <i
                className={
                  copied === "spring-run"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "spring-run" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list"></i>
            <h5>List Java Processes</h5>
          </div>

          <div className="react-command-box">
            <code>jps</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("jps", "jps")}
            >
              <i
                className={
                  copied === "jps"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "jps" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Java Help</h5>
          </div>

          <div className="react-command-box">
            <code>java --help</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("java --help", "help")
              }
            >
              <i
                className={
                  copied === "help"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "help" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Clean Maven Project</h5>
          </div>

          <div className="react-command-box">
            <code>mvn clean</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mvn clean", "maven-clean")
              }
            >
              <i
                className={
                  copied === "maven-clean"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "maven-clean" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

{/* model coontent */}

{/* commmm */}

 <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#dj">
                  <div className="setup-tool-icon github-icon">
<i class="fa-solid fa-d"></i>                  </div>

                  <span>D Jango</span>
                </div>
  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>
                {/* model content */}

<div class="modal fade" id="dj" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-brands fa-python"></i>
          </div>

          <h2>Django Commands</h2>

          <p>
            Useful Django commands to create, run and manage Django projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install Django</h5>
          </div>

          <div className="react-command-box">
            <code>pip install django</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("pip install django", "install")}
            >
              <i className={copied === "install" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "install" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Check Django Version</h5>
          </div>

          <div className="react-command-box">
            <code>django-admin --version</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("django-admin --version", "version")
              }
            >
              <i className={copied === "version" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h5>Create Django Project</h5>
          </div>

          <div className="react-command-box">
            <code>django-admin startproject myproject</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "django-admin startproject myproject",
                  "project"
                )
              }
            >
              <i className={copied === "project" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "project" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Run Django Development Server</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py runserver</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py runserver",
                  "runserver"
                )
              }
            >
              <i className={copied === "runserver" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "runserver" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>
            <h5>Create Django App</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py startapp myapp</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py startapp myapp",
                  "app"
                )
              }
            >
              <i className={copied === "app" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "app" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-database"></i>
            <h5>Make Migrations</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py makemigrations</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py makemigrations",
                  "makemigrations"
                )
              }
            >
              <i className={copied === "makemigrations" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "makemigrations" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-database"></i>
            <h5>Apply Migrations</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py migrate</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py migrate",
                  "migrate"
                )
              }
            >
              <i className={copied === "migrate" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "migrate" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-user-plus"></i>
            <h5>Create Superuser</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py createsuperuser</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py createsuperuser",
                  "superuser"
                )
              }
            >
              <i className={copied === "superuser" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "superuser" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h5>Check Django Project</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py check</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py check",
                  "check"
                )
              }
            >
              <i className={copied === "check" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "check" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list"></i>
            <h5>Show Django Migrations</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py showmigrations</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py showmigrations",
                  "showmigrations"
                )
              }
            >
              <i className={copied === "showmigrations" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "showmigrations" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Open Django Shell</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py shell</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py shell",
                  "shell"
                )
              }
            >
              <i className={copied === "shell" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "shell" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-globe"></i>
            <h5>Collect Static Files</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py collectstatic</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py collectstatic",
                  "static"
                )
              }
            >
              <i className={copied === "static" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "static" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 13 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Flush Database</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py flush</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py flush",
                  "flush"
                )
              }
            >
              <i className={copied === "flush" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "flush" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 14 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Django Help</h5>
          </div>

          <div className="react-command-box">
            <code>python manage.py help</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "python manage.py help",
                  "help"
                )
              }
            >
              <i className={copied === "help" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "help" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/* model content */}

{/* commmm */}


{/* commmm */}

 <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#spr">
                  <div className="setup-tool-icon github-icon">
                          <i style={{color:"green"}} className="fa-solid fa-leaf"></i>
                  </div>

                  <span>Spring Boot</span>
                </div>

                  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>
                {/* model content */}
<div class="modal fade" id="spr" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-solid fa-leaf"></i>
          </div>

          <h2>Spring Boot Commands</h2>

          <p>
            Useful Spring Boot commands to create, run, build and manage
            Spring Boot projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Check Java Version</h5>
          </div>

          <div className="react-command-box">
            <code>java --version</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("java --version", "java-version")
              }
            >
              <i
                className={
                  copied === "java-version"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "java-version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>
            <h5>Check Maven Version</h5>
          </div>

          <div className="react-command-box">
            <code>mvn --version</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mvn --version", "maven-version")
              }
            >
              <i
                className={
                  copied === "maven-version"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "maven-version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h5>Create Spring Boot Project</h5>
          </div>

          <div className="react-command-box">
            <code>
              spring init --build=maven myproject
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "spring init --build=maven myproject",
                  "create"
                )
              }
            >
              <i
                className={
                  copied === "create"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "create" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Run Spring Boot Application</h5>
          </div>

          <div className="react-command-box">
            <code>mvn spring-boot:run</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "mvn spring-boot:run",
                  "run"
                )
              }
            >
              <i
                className={
                  copied === "run"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "run" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-gears"></i>
            <h5>Build Spring Boot Project</h5>
          </div>

          <div className="react-command-box">
            <code>mvn clean install</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "mvn clean install",
                  "build"
                )
              }
            >
              <i
                className={
                  copied === "build"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "build" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Clean Project</h5>
          </div>

          <div className="react-command-box">
            <code>mvn clean</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mvn clean", "clean")
              }
            >
              <i
                className={
                  copied === "clean"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "clean" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-file-code"></i>
            <h5>Package Spring Boot Application</h5>
          </div>

          <div className="react-command-box">
            <code>mvn package</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "mvn package",
                  "package"
                )
              }
            >
              <i
                className={
                  copied === "package"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "package" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>
            <h5>Run JAR File</h5>
          </div>

          <div className="react-command-box">
            <code>java -jar target/app.jar</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "java -jar target/app.jar",
                  "jar"
                )
              }
            >
              <i
                className={
                  copied === "jar"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "jar" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-vial"></i>
            <h5>Run Tests</h5>
          </div>

          <div className="react-command-box">
            <code>mvn test</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mvn test", "test")
              }
            >
              <i
                className={
                  copied === "test"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "test" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-rotate"></i>
            <h5>Update Maven Dependencies</h5>
          </div>

          <div className="react-command-box">
            <code>mvn dependency:resolve</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "mvn dependency:resolve",
                  "dependency"
                )
              }
            >
              <i
                className={
                  copied === "dependency"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "dependency" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Spring Boot Help</h5>
          </div>

          <div className="react-command-box">
            <code>mvn spring-boot:help</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "mvn spring-boot:help",
                  "help"
                )
              }
            >
              <i
                className={
                  copied === "help"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "help" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-open"></i>
            <h5>Spring Boot Project Structure</h5>
          </div>

          <div className="react-command-box">
            <code>tree</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("tree", "tree")
              }
            >
              <i
                className={
                  copied === "tree"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "tree" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>
                {/* model content */}

{/* commmm */}



                 <div className="setup-tool" data-bs-toggle="modal" data-bs-target="#ang">
                  <div className="setup-tool-icon github-icon">
 <i style={{color:"red"}} className="fa-brands fa-angular"></i>                  </div>

                  <span>Angular.js</span>
                </div>
  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>
                {/* model content */}

<div class="modal fade" id="ang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-brands fa-angular"></i>
          </div>

          <h2>Angular Commands</h2>

          <p>
            Useful Angular commands to create, run and manage Angular projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-brands fa-node-js"></i>
            <h5>Check Node Version</h5>
          </div>

          <div className="react-command-box">
            <code>node -v</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("node -v", "node")}
            >
              <i className={copied === "node"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "node" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install Angular CLI</h5>
          </div>

          <div className="react-command-box">
            <code>npm install -g @angular/cli</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install -g @angular/cli",
                  "install"
                )
              }
            >
              <i className={copied === "install"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "install" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Check Angular Version</h5>
          </div>

          <div className="react-command-box">
            <code>ng version</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("ng version", "version")
              }
            >
              <i className={copied === "version"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h5>Create Angular Project</h5>
          </div>

          <div className="react-command-box">
            <code>ng new my-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("ng new my-app", "create")
              }
            >
              <i className={copied === "create"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "create" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-open"></i>
            <h5>Open Project Folder</h5>
          </div>

          <div className="react-command-box">
            <code>cd my-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("cd my-app", "cd")
              }
            >
              <i className={copied === "cd"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "cd" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>
            <h5>Run Angular Project</h5>
          </div>

          <div className="react-command-box">
            <code>ng serve</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("ng serve", "serve")
              }
            >
              <i className={copied === "serve"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "serve" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-globe"></i>
            <h5>Run With Browser Open</h5>
          </div>

          <div className="react-command-box">
            <code>ng serve --open</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "ng serve --open",
                  "open"
                )
              }
            >
              <i className={copied === "open"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "open" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-cube"></i>
            <h5>Generate Component</h5>
          </div>

          <div className="react-command-box">
            <code>ng generate component home</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "ng generate component home",
                  "component"
                )
              }
            >
              <i className={copied === "component"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "component" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-route"></i>
            <h5>Generate Routing Module</h5>
          </div>

          <div className="react-command-box">
            <code>ng generate module app-routing --flat --module=app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "ng generate module app-routing --flat --module=app",
                  "routing"
                )
              }
            >
              <i className={copied === "routing"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "routing" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-hammer"></i>
            <h5>Build Project</h5>
          </div>

          <div className="react-command-box">
            <code>ng build</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("ng build", "build")
              }
            >
              <i className={copied === "build"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "build" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-vial"></i>
            <h5>Run Tests</h5>
          </div>

          <div className="react-command-box">
            <code>ng test</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("ng test", "test")
              }
            >
              <i className={copied === "test"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "test" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Angular Help</h5>
          </div>

          <div className="react-command-box">
            <code>ng help</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("ng help", "help")
              }
            >
              <i className={copied === "help"
                ? "fa-solid fa-check"
                : "fa-regular fa-copy"}></i>

              {copied === "help" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/*  */}


                 <div className="setup-tool"  data-bs-toggle="modal" data-bs-target="#ndc">
                  <div className="setup-tool-icon github-icon">
                    <i style={{color:"green"}} className="fa-brands fa-node-js"></i>
                  </div>

                  <span>Node.Js</span>
                </div>
                  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>

                {/* model content */}

<div class="modal fade" id="ndc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-brands fa-node-js"></i>
          </div>

          <h2>Node.js Commands</h2>

          <p>
            Useful Node.js and npm commands to create, run and manage
            Node.js projects.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Check Node.js Version</h5>
          </div>

          <div className="react-command-box">
            <code>node --version</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("node --version", "node-version")
              }
            >
              <i
                className={
                  copied === "node-version"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "node-version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-brands fa-npm"></i>
            <h5>Check npm Version</h5>
          </div>

          <div className="react-command-box">
            <code>npm --version</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm --version", "npm-version")
              }
            >
              <i
                className={
                  copied === "npm-version"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "npm-version" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h5>Create Node.js Project</h5>
          </div>

          <div className="react-command-box">
            <code>mkdir my-node-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mkdir my-node-app", "mkdir")
              }
            >
              <i
                className={
                  copied === "mkdir"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "mkdir" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-open"></i>
            <h5>Go to Project Folder</h5>
          </div>

          <div className="react-command-box">
            <code>cd my-node-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("cd my-node-app", "cd")
              }
            >
              <i
                className={
                  copied === "cd"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "cd" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>
            <h5>Initialize Node Project</h5>
          </div>

          <div className="react-command-box">
            <code>npm init -y</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm init -y", "init")
              }
            >
              <i
                className={
                  copied === "init"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "init" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install Package</h5>
          </div>

          <div className="react-command-box">
            <code>npm install package-name</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install package-name",
                  "install"
                )
              }
            >
              <i
                className={
                  copied === "install"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "install" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-server"></i>
            <h5>Install Express.js</h5>
          </div>

          <div className="react-command-box">
            <code>npm install express</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install express",
                  "express"
                )
              }
            >
              <i
                className={
                  copied === "express"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "express" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Run Node.js File</h5>
          </div>

          <div className="react-command-box">
            <code>node app.js</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("node app.js", "run")
              }
            >
              <i
                className={
                  copied === "run"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "run" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>
            <h5>Start npm Project</h5>
          </div>

          <div className="react-command-box">
            <code>npm start</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm start", "start")
              }
            >
              <i
                className={
                  copied === "start"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "start" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-gears"></i>
            <h5>Install Development Dependency</h5>
          </div>

          <div className="react-command-box">
            <code>npm install package-name --save-dev</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install package-name --save-dev",
                  "dev"
                )
              }
            >
              <i
                className={
                  copied === "dev"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "dev" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Uninstall Package</h5>
          </div>

          <div className="react-command-box">
            <code>npm uninstall package-name</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm uninstall package-name",
                  "uninstall"
                )
              }
            >
              <i
                className={
                  copied === "uninstall"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "uninstall" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h5>Update Package</h5>
          </div>

          <div className="react-command-box">
            <code>npm update package-name</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm update package-name",
                  "update"
                )
              }
            >
              <i
                className={
                  copied === "update"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "update" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 13 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list"></i>
            <h5>List Installed Packages</h5>
          </div>

          <div className="react-command-box">
            <code>npm list</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm list", "list")
              }
            >
              <i
                className={
                  copied === "list"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "list" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 14 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-file-lines"></i>
            <h5>Install package.json Dependencies</h5>
          </div>

          <div className="react-command-box">
            <code>npm install</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm install", "dependencies")
              }
            >
              <i
                className={
                  copied === "dependencies"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "dependencies" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 15 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-broom"></i>
            <h5>Clear npm Cache</h5>
          </div>

          <div className="react-command-box">
            <code>npm cache clean --force</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm cache clean --force",
                  "cache"
                )
              }
            >
              <i
                className={
                  copied === "cache"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>

              {copied === "cache" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>
                {/* model content */}

                {/*  */}
<div className="setup-tool"  data-bs-toggle="modal" data-bs-target="#expc">
                  <div className="setup-tool-icon github-icon">
                  <i className="fa-solid fa-server"></i>
                  </div>

                  <span>Express.js</span>
                </div>
  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>
                {/* model content */}

<div class="modal fade" id="expc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-solid fa-server"></i>
          </div>

          <h2>Express.js Commands</h2>

          <p>
            Useful Express.js and npm commands to create, run and manage
            Express.js applications.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install Express.js</h5>
          </div>

          <div className="react-command-box">
            <code>npm install express</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm install express", "install")
              }
            >
              <i
                className={
                  copied === "install"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "install" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h5>Create Express Project</h5>
          </div>

          <div className="react-command-box">
            <code>mkdir express-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("mkdir express-app", "mkdir")
              }
            >
              <i
                className={
                  copied === "mkdir"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "mkdir" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-folder-open"></i>
            <h5>Go to Project Folder</h5>
          </div>

          <div className="react-command-box">
            <code>cd express-app</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("cd express-app", "cd")
              }
            >
              <i
                className={
                  copied === "cd"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "cd" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-box"></i>
            <h5>Initialize Node Project</h5>
          </div>

          <div className="react-command-box">
            <code>npm init -y</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm init -y", "init")
              }
            >
              <i
                className={
                  copied === "init"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "init" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Create Basic Express App</h5>
          </div>

          <div className="react-command-box">
            <code>const express = require("express");</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'const express = require("express");',
                  "require"
                )
              }
            >
              <i
                className={
                  copied === "require"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "require" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-play"></i>
            <h5>Run Express App</h5>
          </div>

          <div className="react-command-box">
            <code>node app.js</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("node app.js", "run")
              }
            >
              <i
                className={
                  copied === "run"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "run" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-server"></i>
            <h5>Install Nodemon</h5>
          </div>

          <div className="react-command-box">
            <code>npm install --save-dev nodemon</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install --save-dev nodemon",
                  "nodemon"
                )
              }
            >
              <i
                className={
                  copied === "nodemon"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "nodemon" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-gears"></i>
            <h5>Run with Nodemon</h5>
          </div>

          <div className="react-command-box">
            <code>npx nodemon app.js</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npx nodemon app.js",
                  "nodemon-run"
                )
              }
            >
              <i
                className={
                  copied === "nodemon-run"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "nodemon-run" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-download"></i>
            <h5>Install CORS</h5>
          </div>

          <div className="react-command-box">
            <code>npm install cors</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm install cors", "cors")
              }
            >
              <i
                className={
                  copied === "cors"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "cors" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-database"></i>
            <h5>Install MongoDB Driver</h5>
          </div>

          <div className="react-command-box">
            <code>npm install mongodb</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install mongodb",
                  "mongodb"
                )
              }
            >
              <i
                className={
                  copied === "mongodb"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "mongodb" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-code"></i>
            <h5>Install Mongoose</h5>
          </div>

          <div className="react-command-box">
            <code>npm install mongoose</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install mongoose",
                  "mongoose"
                )
              }
            >
              <i
                className={
                  copied === "mongoose"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "mongoose" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h5>Install dotenv</h5>
          </div>

          <div className="react-command-box">
            <code>npm install dotenv</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm install dotenv",
                  "dotenv"
                )
              }
            >
              <i
                className={
                  copied === "dotenv"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "dotenv" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 13 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list"></i>
            <h5>List Installed Packages</h5>
          </div>

          <div className="react-command-box">
            <code>npm list</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("npm list", "list")
              }
            >
              <i
                className={
                  copied === "list"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "list" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 14 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Uninstall Express</h5>
          </div>

          <div className="react-command-box">
            <code>npm uninstall express</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm uninstall express",
                  "uninstall"
                )
              }
            >
              <i
                className={
                  copied === "uninstall"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "uninstall" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 15 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h5>Update Express</h5>
          </div>

          <div className="react-command-box">
            <code>npm update express</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "npm update express",
                  "update"
                )
              }
            >
              <i
                className={
                  copied === "update"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "update" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/* model content */}

                {/*  */}






                
                {/*  */}
<div className="setup-tool" data-bs-toggle="modal" data-bs-target="#mongc">
                  <div className="setup-tool-icon github-icon">
<i style={{color:"green"}} class="fa-solid fa-database"></i>                  </div>

                  <span>MongoDB</span>
                </div>
                  <div className="setup-arrow">
                  <i  className="fa-solid fa-arrow-right"></i>
                </div>


                {/* model */}

<div class="modal fade" id="mongc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">

          <div className="react-command-icon">
            <i className="fa-solid fa-database"></i>
          </div>

          <h2>MongoDB Commands</h2>

          <p>
            Useful MongoDB commands to create, query, update and manage
            MongoDB databases and collections.
          </p>

        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Start MongoDB Shell</h5>
          </div>

          <div className="react-command-box">
            <code>mongosh</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("mongosh", "mongosh")}
            >
              <i
                className={
                  copied === "mongosh"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "mongosh" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-database"></i>
            <h5>Show Databases</h5>
          </div>

          <div className="react-command-box">
            <code>show dbs</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("show dbs", "show-dbs")}
            >
              <i
                className={
                  copied === "show-dbs"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "show-dbs" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-database"></i>
            <h5>Create / Switch Database</h5>
          </div>

          <div className="react-command-box">
            <code>use myDatabase</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("use myDatabase", "use-db")
              }
            >
              <i
                className={
                  copied === "use-db"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "use-db" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Show Current Database</h5>
          </div>

          <div className="react-command-box">
            <code>db</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("db", "current-db")}
            >
              <i
                className={
                  copied === "current-db"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "current-db" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-table"></i>
            <h5>Create Collection</h5>
          </div>

          <div className="react-command-box">
            <code>db.createCollection("users")</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'db.createCollection("users")',
                  "create-collection"
                )
              }
            >
              <i
                className={
                  copied === "create-collection"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "create-collection" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list"></i>
            <h5>Show Collections</h5>
          </div>

          <div className="react-command-box">
            <code>show collections</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("show collections", "collections")
              }
            >
              <i
                className={
                  copied === "collections"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "collections" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-plus"></i>
            <h5>Insert One Document</h5>
          </div>

          <div className="react-command-box">
            <code>
              {`db.users.insertOne({ name: "Vamsi", age: 22 })`}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'db.users.insertOne({ name: "Vamsi", age: 22 })',
                  "insert-one"
                )
              }
            >
              <i
                className={
                  copied === "insert-one"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "insert-one" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-layer-group"></i>
            <h5>Insert Many Documents</h5>
          </div>

          <div className="react-command-box">
            <code>
              {`db.users.insertMany([{name:"A"},{name:"B"}])`}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'db.users.insertMany([{name:"A"},{name:"B"}])',
                  "insert-many"
                )
              }
            >
              <i
                className={
                  copied === "insert-many"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "insert-many" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h5>Find All Documents</h5>
          </div>

          <div className="react-command-box">
            <code>db.users.find()</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("db.users.find()", "find-all")
              }
            >
              <i
                className={
                  copied === "find-all"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "find-all" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-search"></i>
            <h5>Find One Document</h5>
          </div>

          <div className="react-command-box">
            <code>{`db.users.findOne({ name: "Vamsi" })`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'db.users.findOne({ name: "Vamsi" })',
                  "find-one"
                )
              }
            >
              <i
                className={
                  copied === "find-one"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "find-one" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-filter"></i>
            <h5>Filter Documents</h5>
          </div>

          <div className="react-command-box">
            <code>{`db.users.find({ age: 22 })`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "db.users.find({ age: 22 })",
                  "filter"
                )
              }
            >
              <i
                className={
                  copied === "filter"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "filter" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-pen"></i>
            <h5>Update One Document</h5>
          </div>

          <div className="react-command-box">
            <code>
              {`db.users.updateOne({name:"Vamsi"},{$set:{age:23}})`}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'db.users.updateOne({name:"Vamsi"},{$set:{age:23}})',
                  "update-one"
                )
              }
            >
              <i
                className={
                  copied === "update-one"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "update-one" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 13 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-layer-group"></i>
            <h5>Update Many Documents</h5>
          </div>

          <div className="react-command-box">
            <code>
              {`db.users.updateMany({},{$set:{active:true}})`}
            </code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "db.users.updateMany({},{$set:{active:true}})",
                  "update-many"
                )
              }
            >
              <i
                className={
                  copied === "update-many"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "update-many" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 14 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Delete One Document</h5>
          </div>

          <div className="react-command-box">
            <code>{`db.users.deleteOne({ name: "Vamsi" })`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'db.users.deleteOne({ name: "Vamsi" })',
                  "delete-one"
                )
              }
            >
              <i
                className={
                  copied === "delete-one"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "delete-one" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 15 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash-can"></i>
            <h5>Delete Many Documents</h5>
          </div>

          <div className="react-command-box">
            <code>db.users.deleteMany({})</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "db.users.deleteMany({})",
                  "delete-many"
                )
              }
            >
              <i
                className={
                  copied === "delete-many"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "delete-many" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 16 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrow-down-wide-short"></i>
            <h5>Sort Documents</h5>
          </div>

          <div className="react-command-box">
            <code>db.users.find().sort({`{ age: 1 }`})</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "db.users.find().sort({ age: 1 })",
                  "sort"
                )
              }
            >
              <i
                className={
                  copied === "sort"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "sort" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 17 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list-ol"></i>
            <h5>Limit Results</h5>
          </div>

          <div className="react-command-box">
            <code>db.users.find().limit(5)</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "db.users.find().limit(5)",
                  "limit"
                )
              }
            >
              <i
                className={
                  copied === "limit"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "limit" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 18 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-calculator"></i>
            <h5>Count Documents</h5>
          </div>

          <div className="react-command-box">
            <code>db.users.countDocuments()</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "db.users.countDocuments()",
                  "count"
                )
              }
            >
              <i
                className={
                  copied === "count"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "count" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 19 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-magnifying-glass-plus"></i>
            <h5>Create Index</h5>
          </div>

          <div className="react-command-box">
            <code>{`db.users.createIndex({ email: 1 })`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "db.users.createIndex({ email: 1 })",
                  "index"
                )
              }
            >
              <i
                className={
                  copied === "index"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "index" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 20 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-chart-column"></i>
            <h5>Aggregation</h5>
          </div>

          <div className="react-command-box">
            <code>{`db.users.aggregate([{ $group: { _id: "$city", count: { $sum: 1 } } }])`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  'db.users.aggregate([{ $group: { _id: "$city", count: { $sum: 1 } } }])',
                  "aggregate"
                )
              }
            >
              <i
                className={
                  copied === "aggregate"
                    ? "fa-solid fa-check"
                    : "fa-regular fa-copy"
                }
              ></i>
              {copied === "aggregate" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>

                {/* model */}

               

                {/*  */}



                
                {/*  */}
<div className="setup-tool" data-bs-toggle="modal" data-bs-target="#sqlc">
                  <div className="setup-tool-icon github-icon">
<i class="fa-solid fa-database"></i>                  </div>

                  <span>MySQL</span>
                </div>
                

                {/* model */}

  <div class="modal fade" id="sqlc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <section className="react-commands-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="react-commands-heading text-center mb-4 mb-md-5">
          <div className="react-command-icon">
            <i className="fa-solid fa-database"></i>
          </div>

          <h2>MySQL Commands</h2>

          <p>
            Useful MySQL commands to create databases, tables, insert data,
            query records and manage SQL databases.
          </p>
        </div>

        {/* 1 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-terminal"></i>
            <h5>Login to MySQL</h5>
          </div>

          <div className="react-command-box">
            <code>mysql -u root -p</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("mysql -u root -p", "login")}
            >
              <i className={copied === "login" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "login" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-database"></i>
            <h5>Show Databases</h5>
          </div>

          <div className="react-command-box">
            <code>SHOW DATABASES;</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("SHOW DATABASES;", "show-db")}
            >
              <i className={copied === "show-db" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "show-db" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 3 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-plus"></i>
            <h5>Create Database</h5>
          </div>

          <div className="react-command-box">
            <code>CREATE DATABASE mydb;</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("CREATE DATABASE mydb;", "create-db")}
            >
              <i className={copied === "create-db" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "create-db" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 4 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrow-right"></i>
            <h5>Use Database</h5>
          </div>

          <div className="react-command-box">
            <code>USE mydb;</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("USE mydb;", "use-db")}
            >
              <i className={copied === "use-db" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "use-db" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 5 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-table"></i>
            <h5>Create Table</h5>
          </div>

          <div className="react-command-box">
            <code>{`CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100)
);`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
`CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100)
);`,
                  "create-table"
                )
              }
            >
              <i className={copied === "create-table" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "create-table" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 6 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-list"></i>
            <h5>Show Tables</h5>
          </div>

          <div className="react-command-box">
            <code>SHOW TABLES;</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("SHOW TABLES;", "show-tables")}
            >
              <i className={copied === "show-tables" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "show-tables" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 7 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Describe Table</h5>
          </div>

          <div className="react-command-box">
            <code>DESCRIBE users;</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("DESCRIBE users;", "describe")}
            >
              <i className={copied === "describe" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "describe" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 8 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-plus"></i>
            <h5>Insert Data</h5>
          </div>

          <div className="react-command-box">
            <code>{`INSERT INTO users (name, email)
VALUES ('Vamsi', 'vamsi@example.com');`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
`INSERT INTO users (name, email)
VALUES ('Vamsi', 'vamsi@example.com');`,
                  "insert"
                )
              }
            >
              <i className={copied === "insert" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "insert" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 9 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-table-list"></i>
            <h5>Select All Records</h5>
          </div>

          <div className="react-command-box">
            <code>SELECT * FROM users;</code>

            <button
              className="react-copy-btn"
              onClick={() => copyCommand("SELECT * FROM users;", "select-all")}
            >
              <i className={copied === "select-all" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "select-all" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 10 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-filter"></i>
            <h5>WHERE Condition</h5>
          </div>

          <div className="react-command-box">
            <code>{`SELECT * FROM users WHERE id = 1;`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "SELECT * FROM users WHERE id = 1;",
                  "where"
                )
              }
            >
              <i className={copied === "where" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "where" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 11 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrow-down-wide-short"></i>
            <h5>ORDER BY</h5>
          </div>

          <div className="react-command-box">
            <code>SELECT * FROM users ORDER BY name ASC;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "SELECT * FROM users ORDER BY name ASC;",
                  "order"
                )
              }
            >
              <i className={copied === "order" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "order" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 12 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-filter-circle-dollar"></i>
            <h5>LIKE</h5>
          </div>

          <div className="react-command-box">
            <code>{`SELECT * FROM users WHERE name LIKE 'V%';`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "SELECT * FROM users WHERE name LIKE 'V%';",
                  "like"
                )
              }
            >
              <i className={copied === "like" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "like" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 13 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-pen"></i>
            <h5>Update Data</h5>
          </div>

          <div className="react-command-box">
            <code>{`UPDATE users SET name = 'Vamsi' WHERE id = 1;`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "UPDATE users SET name = 'Vamsi' WHERE id = 1;",
                  "update"
                )
              }
            >
              <i className={copied === "update" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "update" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 14 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-trash"></i>
            <h5>Delete Data</h5>
          </div>

          <div className="react-command-box">
            <code>DELETE FROM users WHERE id = 1;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "DELETE FROM users WHERE id = 1;",
                  "delete"
                )
              }
            >
              <i className={copied === "delete" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "delete" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 15 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-calculator"></i>
            <h5>COUNT</h5>
          </div>

          <div className="react-command-box">
            <code>SELECT COUNT(*) FROM users;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "SELECT COUNT(*) FROM users;",
                  "count"
                )
              }
            >
              <i className={copied === "count" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "count" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 16 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-link"></i>
            <h5>INNER JOIN</h5>
          </div>

          <div className="react-command-box">
            <code>{`SELECT users.name, orders.id
FROM users
INNER JOIN orders ON users.id = orders.user_id;`}</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
`SELECT users.name, orders.id
FROM users
INNER JOIN orders ON users.id = orders.user_id;`,
                  "inner-join"
                )
              }
            >
              <i className={copied === "inner-join" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "inner-join" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 17 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-layer-group"></i>
            <h5>GROUP BY</h5>
          </div>

          <div className="react-command-box">
            <code>SELECT city, COUNT(*) FROM users GROUP BY city;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "SELECT city, COUNT(*) FROM users GROUP BY city;",
                  "group"
                )
              }
            >
              <i className={copied === "group" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "group" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 18 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-filter"></i>
            <h5>HAVING</h5>
          </div>

          <div className="react-command-box">
            <code>SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) &gt; 2;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 2;",
                  "having"
                )
              }
            >
              <i className={copied === "having" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "having" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 19 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-key"></i>
            <h5>Primary Key</h5>
          </div>

          <div className="react-command-box">
            <code>PRIMARY KEY (id)</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("PRIMARY KEY (id)", "primary-key")
              }
            >
              <i className={copied === "primary-key" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "primary-key" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 20 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-right-left"></i>
            <h5>ALTER TABLE Add Column</h5>
          </div>

          <div className="react-command-box">
            <code>ALTER TABLE users ADD COLUMN age INT;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "ALTER TABLE users ADD COLUMN age INT;",
                  "alter"
                )
              }
            >
              <i className={copied === "alter" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "alter" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 21 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrow-up"></i>
            <h5>LIMIT</h5>
          </div>

          <div className="react-command-box">
            <code>SELECT * FROM users LIMIT 5;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "SELECT * FROM users LIMIT 5;",
                  "limit"
                )
              }
            >
              <i className={copied === "limit" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "limit" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 22 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-bolt"></i>
            <h5>Create Index</h5>
          </div>

          <div className="react-command-box">
            <code>CREATE INDEX idx_email ON users(email);</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand(
                  "CREATE INDEX idx_email ON users(email);",
                  "index"
                )
              }
            >
              <i className={copied === "index" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "index" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 23 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h5>Start Transaction</h5>
          </div>

          <div className="react-command-box">
            <code>START TRANSACTION;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("START TRANSACTION;", "transaction")
              }
            >
              <i className={copied === "transaction" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "transaction" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 24 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-rotate-left"></i>
            <h5>ROLLBACK</h5>
          </div>

          <div className="react-command-box">
            <code>ROLLBACK;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("ROLLBACK;", "rollback")
              }
            >
              <i className={copied === "rollback" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "rollback" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* 25 */}
        <div className="react-command-card">
          <div className="react-command-title">
            <i className="fa-solid fa-check"></i>
            <h5>COMMIT</h5>
          </div>

          <div className="react-command-box">
            <code>COMMIT;</code>

            <button
              className="react-copy-btn"
              onClick={() =>
                copyCommand("COMMIT;", "commit")
              }
            >
              <i className={copied === "commit" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
              {copied === "commit" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>
                {/* model */}

                {/*  */}

{/* futer update */}

                {/* <div className="setup-tool">
                  <div className="setup-tool-icon github-icon">
                    <i className="fa-brands fa-github"></i>
                  </div>

                  <span>future upadae</span>
                </div> */}

                {/* futer update */}

              </div>
    

              {/* Setup Cards */}
              <div className="setup-mini-grid mt-3">
           
          <a style={{textDecoration:"none"}} target="_blank" href="https://www.netlify.com"> 
                <div  className="setup-mini-card" id="netlify-deploy">
                
                  <div className="setup-mini-icon vscode-icon">
                 <i className="fa-solid fa-globe"></i>
                  </div>

                  <div>
                    <h6>Netlify</h6>
                    <p>React/Vite/static frontend websites deploy</p>
                  </div>
                </div></a>


                <a style={{textDecoration:"none"}} target="_blank" href="https://vercel.com"> 
                <div  className="setup-mini-card" id="vercel-deploy">
                
                  <div className="setup-mini-icon vscode-icon">
               <i style={{color:"black"}} className="fa-solid fa-cloud"></i>
                  </div>

                  <div>
                    <h6>Vercel</h6>
                    <p>React, Next.js, frontend websites deploy</p>
                  </div>
                </div></a>


                <a style={{textDecoration:"none"}} target="_blank" href="https://render.com"> 
                <div  className="setup-mini-card" id="render-deploy">
                
                  <div className="setup-mini-icon vscode-icon">
<i style={{color:"purple"}}  className="fa-solid fa-server"></i>                  </div>

                  <div>
                    <h6>Render</h6>
                    <p>Backend APIs, Node.js/Express, Python apps, databases etc. deploy</p>
                  </div>
                </div></a>

                

              </div>


              {/* View All */}
                 <div className="setup-mini-grid mt-2">

                <a style={{textDecoration:"none"}} target="_blank" href="https://railway.app"> 
                <div  className="setup-mini-card" id="railway-deploy">
                
                  <div className="setup-mini-icon vscode-icon">
              <i style={{color:"blue"}}  className="fa-solid fa-train"></i>
                  </div>

                  <div>
                    <h6>Railway</h6>
                    <p>Backend applications, databases, APIs deploy</p>
                  </div>
                </div></a>


                 <a style={{textDecoration:"none"}} target="_blank" href="https://pages.cloudflare.com"> 
                <div  className="setup-mini-card" id="cloudflare-deploy">
                
                  <div className="setup-mini-icon vscode-icon">
               <i style={{color:"orange"}} className="fa-solid fa-cloud"></i>
                  </div>

                  <div>
                    <h6>Cloudflare Pages</h6>
                    <p>Static/frontend websites fast ga deploy</p>
                  </div>
                </div></a>


                <a style={{textDecoration:"none"}} target="_blank" href="https://pages.github.com"> 
                <div  className="setup-mini-card" id="github-pages-deploy">
                
                  <div className="setup-mini-icon vscode-icon">
                 <i style={{color:"gray"}}  className="fa-brands fa-github"></i>
                  </div>

                  <div>
                    <h6>GitHub Pages</h6>
                    <p>HTML, CSS, JavaScript, React static websites host</p>
                  </div>
                </div></a>

                

              </div>
              

            </div>
          </div>


          {/* =====================================
              DEVELOPER TOOLS
          ====================================== */}
          <div className="col-12 col-lg-3">

            <div className="quick-panel h-100 ">

              {/* Header */}
              <div className="quick-panel-header tools-header">

                <div className="quick-title">

                  <div className="quick-title-icon tools-title-icon">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                  </div>

                  <h5> Tools</h5>

                </div>

                 

              </div>


              {/* Tools Grid */}
              <div className="tools-grid" id="tools">

                {/* JSON Formatter */}
                <a href="https://fontawesome.com/" className="tool-card" >
<i style={{color:"blue"}} class="fa-brands fa-square-font-awesome"></i>                  <span>Font Awesome</span>
                </a>


                {/* JSON Validator */}
                <a href="https://fonts.google.com/" className="tool-card">
<i style={{color:"green"}} class="fa-brands fa-google"></i>                  <span>Google Fonts</span>
                </a>


                {/* Color Picker */}
                <a href="https://pickcoloronline.com/#google_vignette" className="tool-card">
                  <i className="fa-solid fa-eye-dropper tool-pink"></i>
                  <span>Color Picker</span>
                </a>


                {/* Gradient */}
                <a href="https://cssgradient.io/" className="tool-card">
                  <i className="fa-solid fa-circle-half-stroke tool-purple"></i>
                  <span>Gradient Generator</span>
                </a>


                {/* Image Compressor */}
                <a href="https://www.iloveimg.com/compress-image" className="tool-card">
                  <i className="fa-regular fa-image tool-green"></i>
                  <span>Image Compressor</span>
                </a>


                {/* QR */}
                <a href="https://www.canva.com/" className="tool-card">
                  <i style={{color:"purple"}} class="fa-solid fa-spray-can"></i>
                  <span>Canvas</span>
                </a>


                {/* Regex */}
                <a href="https://www.w3schools.com/" className="tool-card">
<i style={{color:"green"}} class="fa-brands fa-w3c"></i>                  <span>W3 schools</span>
                </a>


                {/* UUID */}
                <a href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp" className="tool-card">
                <i style={{color:"blue"}}  className="fa-solid fa-mobile-screen-button"></i>
                  <span>Media Query</span>
                  
                </a>
                


                {/* More */}
                <a href="https://qrfy.com/" className="tool-card">
                  <i style={{color:"black"}}  className="fa-solid fa-qrcode"></i>
                  <span>QR Code Gen</span>
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Commands
