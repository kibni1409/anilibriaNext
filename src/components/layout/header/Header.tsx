"use client"

import Link from "next/link";
import { Select } from 'antd';
import styles from './Header.module.scss';
import {useSearch} from "@/hooks/useSearch";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {useState, useEffect} from "react";

const { Option } = Select;

const Header = () => {
    const [searchValue, setSearchValue] = useState();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { result, searchHandler } = useSearch();
    const { push } = useRouter();

    useEffect(() => {
        if (isDropdownOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isDropdownOpen]);

    return (
        <div className={styles.headerWrap}>
            <Select
                value={searchValue}
                onSelect={(value) => {
                    setSearchValue(value);
                    push(`/movie/${value}`);
                    setIsDropdownOpen(false);
                }}
                onDropdownVisibleChange={(open) => {
                    setIsDropdownOpen(open);
                }}
                onSearch={searchHandler}
                optionLabelProp="label"
                showSearch
                placeholder="Search"
                className={styles.search}
                defaultActiveFirstOption={false}
                suffixIcon={null}
                filterOption={false}
                notFoundContent={null}
                listHeight={800}
                dropdownClassName={styles.dropdown}
                getPopupContainer={(trigger) => trigger.parentNode}
            >
                {result?.map(option => (
                    <Option 
                        key={option.name.main}
                        value={option.alias} 
                        label={option.name.main}
                    >
                        <div className={styles.option}>
                            <div className={styles.optionImage}>
                                <Image
                                    src={process.env.NEXT_PUBLIC_BASE_URL + option.poster.src}
                                    alt={option.alias}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="100px"
                                />
                            </div>
                            <div className={styles.optionInfo}>
                                <span className={styles.optionTitle}>{option.name.main}</span>
                                <p className={styles.optionDescription}>{option.description}</p>
                            </div>
                        </div>
                    </Option>
                ))}
            </Select>
            <Link className={styles.link} href="/">Home page</Link>
            <Link className={styles.link} href="/about">About</Link>
        </div>
    );
};

export default Header;