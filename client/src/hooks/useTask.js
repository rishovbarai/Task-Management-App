import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadTasks } from '../redux/taskSlice';

const useTask = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    return { tasks, loading, error };
};

export default useTask;
