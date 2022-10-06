import queryString from 'query-string';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useLocation, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from './../../components/TodoList';
ListPage.propTypes = {};

function ListPage(props) {
  const inittodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const resolved = useResolvedPath();
  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });
  const [todoList, setTodoList] = useState(inittodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    //clone current array to the new one
    const newTodoList = [...todoList];

    console.log(todo, idx);
    //toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    newTodoList[idx] = newTodo;

    //update todoList
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus('all');
    const queryParams = { status: 'all' };
    navigate({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    navigate({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    setFilterStatus('new');
    const queryParams = { status: 'new' };
    navigate({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (value) => {
    console.log('Form submit', value);
    const newTodo = {
      id: todoList.length + 1,
      title: value.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Conpleted</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
