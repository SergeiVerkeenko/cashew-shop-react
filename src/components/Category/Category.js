import style from './Category.module.css'
function Category() {
    return (
        <>
            <h1>Categories</h1>
            <div className={style['centr']}>
                <div className={style['komp-img']}>
                    <div className={style['komp-btn']}>
                        <p>Electronics</p>
                    </div>
                </div>
                <div>
                    <div className={style['sneakers-img']}>
                        <div className={style['sneakers-btn']}>
                            <p>Fashion & accessories</p>
                        </div>
                    </div>
                    <div className={style['perfume-img']}>
                        <div className={style['perfume-btn']}>
                            <p>Beauty & health</p>
                        </div>
                    </div>

                </div>

                <div className={style['flower-img']}>
                    <div className={style['flower-btn']}>
                        <p>Home & furniture</p>
                    </div>
                </div>
            </div>

            <div className={style['btn-black']}>
                <p>View all </p>
                <div className={style['strelka']}> </div>
            </div>


        </>
    )
}

export default Category