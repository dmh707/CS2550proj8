let project_list = []
class Proj {
    constructor(img_url, title, problem_solved, github_url) {
        this.img_url = img_url;
        this.title = title;
        this.problem_solved = problem_solved;
        this.github_url = github_url;
    }
}
function add_project(project){
    console.log('add_project: project')
    console.log(project)
    let new_project = new Proj(project.img_url,project.title,project.problem_solved,project.github_url);
    project_list.push(new_project)
    console.log('new_project')
    console.log('project_list')
    console.log(new_project)
    console.log(project_list)
    return new_project;
}
function add_all_projects(projects){
    for (let project in projects){
        add_project(projects[project])
    }
}
function display_project(proj){
    console.log('display_project: proj')
    console.log(proj)
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

    return proj_elem

}
function display_all_projects(){
    let projects_container = document.getElementById('projects-body');
    projects_container.innerHTML='';

    for (let project in project_list){
        let project_elem = display_project(project_list[project])
        projects_container.appendChild(project_elem);
    }
}
function main(){
    let project_data=get_project_data()
    add_all_projects(project_data)
    display_all_projects()
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