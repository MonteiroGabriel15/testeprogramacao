import React, { useState } from 'react';
import styled from 'styled-components';

//Sei que não é o melhor método de implementação do styled components, mas utilizei dessa maneira para ficar mais rápido.
const Container = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
`;

const Input = styled.input`
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #1D1160;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #7600bc;
    }
`;

const TaskListContainer = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TaskItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${(props) => (props.completed ? '#CBC3E3' : '#ffffe0 ')};
    border: 1px solid ${(props) => (props.completed ? '#CBC3E3' : '#ffffe0 ')};
    border-radius: 4px;
    margin-bottom: 10px;
`;

const TaskName = styled.span`
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    color: ${(props) => (props.completed ? '#1D1160' : '#000 ')};
`;

const TaskButton = styled.button`
    background-color: ${(props) => (props.primary ? ' #1D1160' : '#E56020')};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
    margin-left: 5px;

    &:hover {
        background-color: ${(props) => (props.primary ? '#7600bc' : '#FF9913 ')};
    }
`;

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showCompleted, setShowCompleted] = useState(false);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { name: newTask, isCompleted: false }]);
            setNewTask('');
        }
    };

    const toggleTaskStatus = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    const filteredTasks = showCompleted ? tasks.filter(task => task.isCompleted) : tasks;

    return (
        <Container>
            <Title>Lista de Tarefas</Title>
            <Input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <Button onClick={addTask}>Adicionar Tarefa</Button>

            <TaskListContainer>
                {filteredTasks.map((task, index) => (
                    <TaskItem key={index} completed={task.isCompleted}>
                        <TaskName completed={task.isCompleted}>{task.name}</TaskName>
                        <div>
                            <TaskButton primary onClick={() => toggleTaskStatus(index)}>
                                {task.isCompleted ? 'Desmarcar' : 'Concluir'}
                            </TaskButton>
                            <TaskButton onClick={() => removeTask(index)}>Remover</TaskButton>
                        </div>
                    </TaskItem>
                ))}
            </TaskListContainer>

            <Button onClick={() => setShowCompleted(!showCompleted)}>
                {showCompleted ? 'Mostrar Todas as Tarefas' : 'Mostrar Apenas Concluídas'}
            </Button>
        </Container>
    );
}

export default TaskList;
