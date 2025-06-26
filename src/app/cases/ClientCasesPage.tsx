'use client';

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCases } from "@/store/casesSlice";
import css from "./page.module.css";
import CaseCard from "@/widgets/ui/Case/case";

const PAGE_SIZE = 10;

export default function ClientCasesPage() {
    const dispatch = useAppDispatch();
    const { items: allCases, error, loading, hasMore } = useAppSelector((state) => state.cases);

    useEffect(() => {
        if (allCases.length === 0) {
            dispatch(fetchCases({ offset: 0, limit: PAGE_SIZE }));
        }
    }, [dispatch, allCases.length]);

    const loadMore = () => {
        dispatch(fetchCases({ offset: allCases.length, limit: PAGE_SIZE }));
    };

    const mid = Math.ceil(allCases.length / 2);
    const leftColumn = allCases.slice(0, mid);
    const rightColumn = allCases.slice(mid);

    return (
        <main className={css.container}>
            <h1 className={css.title}>Наши кейсы</h1>

            <div className={css.columns}>
                <div className={css.column}>
                    {leftColumn.map((item) => (
                        <CaseCard key={item.slug} item={item} />
                    ))}
                </div>

                <div className={css.column}>
                    {rightColumn.map((item) => (
                        <CaseCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>

            {loading && allCases.length > 0 && <p>Загрузка...</p>}

            {!loading && hasMore && (
                <button className={css.loadMoreButton} onClick={loadMore}>
                    Загрузить ещё
                </button>
            )}

            {!hasMore && <p>Все кейсы загружены</p>}
        </main>
    );
}
