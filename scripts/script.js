

function readJson(){
    x = fetch("scripts/projects_data.json")
        .then(response => response.json())
        .then(data => console.log(data));
    console.log(x)
}
readJson()
/*

            <project><a src="#">
                <img src="images/proj_example.png" class="project-image">
                <p class="project-title">Project Title</p>
                <p class="project-problem">Problem I Solved</p>
                <button>SEE GITHUB REPO</button>
            </a></project>
*/