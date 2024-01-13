import { useTags } from '../../../hooks/useArticles';
import { DropDown } from '../../ui/DropDown';
import { options } from './Actions';

// eslint-disable-next-line react-refresh/only-export-components

export function Filter({ filter, onChange }) {
  const { tags, isLoading } = useTags();
  if (isLoading) return null;
  return (
    <DropDown.NestedMenu
      toggler={
        <DropDown.Button className='justify-between'>
          <i className='fa-solid fa-filter'></i>{' '}
          <span className='flex-1 text-start font-medium capitalize'>
            {tags.find(({ name }) => name === filter)?.name || 'All'}
          </span>
          <i className='fa-solid fa-chevron-right'></i>
        </DropDown.Button>
      }
      options={options}
    >
      {['all', ...tags.map((t) => t.name).toSorted(), 'other'].map((tag) => (
        <DropDown.Button
          key={tag}
          onClick={() => onChange(tag.toLowerCase())}
          isCurrent={filter === tag}
        >
          <span className='capitalize'>{tag}</span>
        </DropDown.Button>
      ))}
    </DropDown.NestedMenu>
  );
}
