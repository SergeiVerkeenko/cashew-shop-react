import style from './Category.module.css'
function Category() {
    return (
        <>
            <h1>Categories</h1>
            <div className={style['centr']}>
                <div className={style['komp-img']}></div>
                <div>
                    <div className={style['sneakers-img']}></div>
                    <div className={style['perfume-img']}></div>

                </div>

                <div className={style['flower-img']}></div>
            </div>
                <div className={style['table-img']}></div>

        </>
    )
}

export default Category