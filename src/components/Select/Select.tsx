import React, { useState, memo } from 'react';
import { ReactSVG } from 'react-svg';
import Select, {
  components,
  DropdownIndicatorProps,
  OptionProps,
  PlaceholderProps,
} from 'react-select';
import './Select.scss'; // Import your SCSS file
import { SelectOption } from '../../types/SelectOptions';

type Props = {
  options: readonly SelectOption[];
  placeholder: string;
  field: any;
};

const CustomSelect: React.FC<Props> = memo(({ options, field, placeholder }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  let selectOption;

  const CustomOption = (
    props: OptionProps<SelectOption, true>,
  ) => {
    return (
      <components.Option {...props}>
        <input
          type="checkbox"
          readOnly
          checked={field.value?.value === props.data.value}
          style={{ marginRight: '8px' }}
        />
        {props.children}
      </components.Option>
    );
  };

  const CustomDropdownIndicator = (
    props: DropdownIndicatorProps<SelectOption, true>,
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <ReactSVG
          src={menuIsOpen ? 'img/icon/arrow-up.svg' : 'img/icon/arrow-down.svg'}
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="custom-dropdown">
      <Select
        {...field}
        className="react-select-container"
        classNamePrefix="custom-select"
        options={options}
        value={selectOption}
        placeholder={placeholder}
        isSearchable
        autoFocus={false}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        components={{
          IndicatorSeparator: () => null,
          Option: CustomOption,
          DropdownIndicator: CustomDropdownIndicator,
        }}
        onChange={(selectedOption: SelectOption) => {
          field.onChange(selectedOption.value);
          selectOption = selectedOption;
        }}
      />
    </div>
  );
});

export default CustomSelect;
