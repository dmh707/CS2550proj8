import * as data from 'scripts/projects_data.json';
function makeProject(img_url,title,problem_solved,github_url){
    console.log(img_url,title,problem_solved,github_url)
}

function readJson(){
    for (proj of data){
        console.log(proj)
    }

}
readJson()
/*

    "a": {
        "img_url":"../images/proj_example.png",
        "title":"Project 1",
        "problem_solved":"Problem I solved",
        "github_url":"url"
    },
            <project><a src="#">
                <img src="images/proj_example.png" class="project-image">
                <p class="project-title">Project Title</p>
                <p class="project-problem">Problem I Solved</p>
                <button>SEE GITHUB REPO</button>
            </a></project>
*/