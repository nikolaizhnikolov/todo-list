export const project = function (name, todos) {
    const p = Object.create(null);
    p.name = name;
    p.todos = todos;
    return p;
};

export const todo = function (name, priority, date) {
    const t = Object.create(null);
    t.name = name;
    t.priority = priority;
    t.date = date;
    return t;
}

let randomTodos = [todo("make todos", "high", "today")];
let randomProject = project("Project 2", randomTodos);
let defaultProject = project("Todos", []);

export const allProjects = [defaultProject, randomProject];
export const allTodos = () => {
    const at = [];
    allProjects.forEach(p => [].concat(p.todos));
    return at;
};