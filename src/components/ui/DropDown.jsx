import Tippy from '@tippyjs/react';
import { SearchInput } from './SearchInput';

const defaultOptions = {
  className: 'w-36  overflow-auto  max-h-[200px]',
  placement: 'bottom-end',
  trigger: 'click',
  shouldCloseOnClick: true,
};
export function DropDown({
  children,
  toggler,
  togglerClassName,
  togglerDisabled,
  options,
  onOpen,
  onClose,
}) {
  return (
    <Tippy
      content={<ul className='grid gap-1 p-2'>{children}</ul>}
      className={
        'dropdown rounded-md border border-border bg-background-primary p-0 shadow-md ' +
        (options?.className || defaultOptions.className)
      }
      theme='light'
      trigger={options?.trigger || defaultOptions.trigger}
      interactive={true}
      arrow={false}
      placement={options?.placement || defaultOptions.placement}
      onShow={(instance) => {
        onOpen?.();
        (options?.shouldCloseOnClick ?? defaultOptions.shouldCloseOnClick) &&
          instance.popper.addEventListener('click', () => instance.hide());
      }}
      onHidden={onClose}
    >
      <button
        onClick={(e) => e.stopPropagation()}
        className={togglerClassName}
        disabled={togglerDisabled}
      >
        {toggler}
      </button>
    </Tippy>
  );
}

function Button({ children, onClick, className, isDeleteButton, size = 'default', isCurrent }) {
  return (
    <li
      className={
        'relative flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-md text-sm   font-medium transition-colors duration-300 ' +
        className +
        (size === 'small' ? ' px-2 py-1 ' : ' px-3 py-2 ') +
        (isDeleteButton
          ? 'hover:bg-red-500 hover:text-white '
          : 'hover:bg-primary hover:text-white   ') +
        (isCurrent
          ? 'bg-primary text-white '
          : 'bg-background-primary text-text-secondary ')
      }
      onClick={onClick}
    >
      {children}
    </li>
  );
}

function SearchBar({ placeholder, value, onChange }) {
  return (
    <SearchInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='mb-2 text-sm'
      iconClassName='text-text-tertiary text-sm'
    />
  );
}

function Toggler({ children }) {
  return (
    <span className='cursor-pointer  rounded-lg  bg-primary px-3 py-1.5   text-sm text-white  focus:outline-none'>
      {children}
    </span>
  );
}

function Title({ children }) {
  return <span className='text-sm text-text-tertiary'>{children}</span>;
}

function Divider() {
  return <hr className='border border-border' />;
}

function NestedMenu({ children, toggler, togglerClassName, options }) {
  return (
    <DropDown
      toggler={toggler}
      togglerClassName={togglerClassName}
      options={{
        ...options,
        trigger: 'mouseenter focus',
      }}
    >
      {children}
    </DropDown>
  );
}
DropDown.Button = Button;
DropDown.SearchBar = SearchBar;
DropDown.Toggler = Toggler;
DropDown.Title = Title;
DropDown.Divider = Divider;
DropDown.NestedMenu = NestedMenu;
