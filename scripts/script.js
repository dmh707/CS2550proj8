class Proj {
    constructor(img_url, title, problem_solved, github_url) {
        this.img_url = img_url;
        this.title = title;
        this.problem_solved = problem_solved;
        this.github_url = github_url;
    }
}
function makeProj(proj){
    var newProj = new Proj(proj.img_url,proj.title,proj.problem_solved,proj.github_url);
    return newProj;
}
function makeAllProjs(projList){
    let projects_container = document.getElementById('projects-body');
    projects_container.innerHTML='';
    console.log(typeof(projList));
    console.log(projList);

    for (let proj of projList){
        let proj_elem = document.createElement('project');
        let proj_link = document.createElement('a');
        proj_link.href = proj.github_url;
        proj_elem.appendChild(proj_link);

        let image = document.createElement('img');
        image.src=proj.img_url;
        image.className='project-image';
        proj_link.appendChild(image);

        let proj_title = document.createElement('p');
        proj_title.className='project-title';
        proj_title.textContent=proj.title;
        proj_link.appendChild(proj_title);

        let proj_problem = document.createElement('p');
        proj_problem.className='proj-problem';
        proj_problem.textContent=proj.problem_solved;
        proj_link.appendChild(proj_problem);

        let proj_button = document.createElement('button');
        proj_button.textContent='SEE GITHUB REPO';
        proj_link.appendChild(proj_button);
        
        projects_container.appendChild(proj_elem);
    }
    console.log(projList.length)
    console.log(projList[0])
}
function main(){
    let json = {
        "1": {
            "img_url":"images/proj_example.png",
            "title":"Project 1",
            "problem_solved":"Problem I solved",
            "github_url":"#"
        },
        "2": {
            "img_url":"images/proj_example.png",
            "title":"Project 2",
            "problem_solved":"Problem I solved",
            "github_url":"#"
        },
        "3": {
            "img_url":"images/proj_example.png",
            "title":"Project 3",
            "problem_solved":"Problem I solved",
            "github_url":"#"
        },
        "4": {
            "img_url":"images/proj_example.png",
            "title":"Project 4",
            "problem_solved":"Problem I solved",
            "github_url":"#"
        }
    }
    let projList=new Array
    for (proj in json){
        console.log(json[proj])
        projList.push(makeProj(json[proj]))
    }
    makeAllProjs(projList)
}
main()
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