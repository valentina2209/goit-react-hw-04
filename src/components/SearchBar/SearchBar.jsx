import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => setSearchTerm(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(searchTerm);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
    </header>
  );
}