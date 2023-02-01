import { Carta2 } from "@/mock/mock2"

export const ItemListContainer = () => {


    return (
        <>
            {/* <h1  className="text-3xl text-center">Carta Digital</h1> */}
            <div className="px-3" >
                <p id="entradas" className="text-lg ">🥟 Entradas</p>
                {
                    Carta2.entradas.map((menu, i) => (
                        <div className=" border-2 p-1 card" key={i}>
                            <p className="font-semibold ">{menu.name}</p>
                            {menu.variante &&
                                <div className="flex gap-2">
                                    {menu.variante.map((menu, i) => (
                                        <p key={i} className="text-sm ">{menu} </p>

                                    ))}
                                    {/* <p className="text-sm ">{menu.variante[1]} /</p> */}
                                </div>
                            }
                            <p className="text-sm  text-stone-400">{menu.ingredientes}</p>
                            <div className={`${menu.porcionSize && 'flex justify-between items-end'}`}>
                                {menu.porcionSize &&
                                    <div>
                                        <p>Porcion</p>
                                        <div className="flex gap-2">
                                            <p className="text-sm  text-stone-400">{menu.porcionSize[0]}</p>
                                            <p className="text-sm  text-stone-400">{menu.porcionSize[1]}</p>
                                        </div>
                                    </div>
                                }
                                <p className="text-xl px-1  text-end">${menu.precio}</p>
                            </div>
                        </div>
                    ))
                }
                <div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil quam id accusamus voluptates odit quasi tempora delectus suscipit ipsum ipsam aperiam alias? Minima at dignissimos, laborum voluptatibus blanditiis rerum nulla delectus facere sed distinctio fugiat corporis, aspernatur, nostrum perspiciatis provident. Error temporibus, at reiciendis exercitationem, unde excepturi sequi sapiente placeat quos magnam cum quidem quasi ab ipsam iure fuga hic doloremque architecto! Accusamus, libero? Porro beatae quasi quisquam dicta repellendus perspiciatis maiores ducimus, iure autem fuga ratione amet voluptatem? Corrupti repellat unde tempore rerum impedit, tempora aliquid rem quasi nam doloribus exercitationem debitis beatae, voluptatem voluptas deleniti ut accusamus numquam inventore explicabo distinctio, provident praesentium consectetur veniam? Nulla sed sapiente rerum ab illum. Fugiat esse velit nam ducimus libero tempora in illo quaerat quia facilis obcaecati assumenda minima nostrum aut commodi cumque aliquam, cum voluptatem aliquid quasi. Neque quisquam, eveniet inventore odit beatae aspernatur hic placeat dolorum consectetur ducimus? Doloremque blanditiis id aliquid veritatis cupiditate quia eius deleniti quibusdam non. Totam labore, minima beatae ipsam explicabo incidunt ratione minus sint odio excepturi blanditiis nostrum aliquam modi itaque laborum ex architecto iusto hic non? Hic dolor soluta ab aliquam nobis tempora explicabo ad dolorem, deserunt velit ducimus ratione, dolorum quas vitae totam suscipit asperiores! Suscipit cupiditate iste ratione minima rem. Et facere nulla quibusdam, temporibus pariatur minima a ipsum ducimus deleniti iste quis, laudantium at mollitia possimus optio. Doloribus, quod? Reiciendis eligendi distinctio quos natus aliquam dolorum eveniet ipsa ut inventore fugiat temporibus esse, suscipit possimus quibusdam illo in quam! Voluptatem illo eum debitis, consequuntur ad perspiciatis modi animi laborum quae aliquam nostrum dicta quaerat omnis alias dolor numquam pariatur! Eum qui sequi sapiente soluta dolorum cupiditate vero ea est exercitationem temporibus perferendis adipisci assumenda tempore facere quasi, velit distinctio? Fuga sed tempore, aliquid velit magnam excepturi assumenda debitis in reprehenderit a! Fugiat, eveniet vel animi perspiciatis magni repudiandae. Officia officiis odit non ad quisquam dolorum explicabo voluptates veritatis unde recusandae. Corrupti, illo mollitia optio necessitatibus perspiciatis quaerat aperiam consequatur eligendi iusto, qui fugit harum, laborum quam veritatis autem. Natus eos tempora rerum vel error nemo eum repudiandae sint earum. Itaque, eum corrupti, nulla possimus illo vitae fugiat similique nostrum iste aperiam quam asperiores? Ipsa est alias ut cum reiciendis quo molestiae veniam accusantium modi necessitatibus, dolores illo, obcaecati sapiente laboriosam! Ipsam debitis itaque natus laborum voluptatibus consectetur dolores unde aut necessitatibus fuga excepturi beatae, laboriosam dolore voluptatum quaerat aperiam officiis id vel soluta nobis quos ratione libero? Dolor minus ducimus consequatur ratione labore doloremque officiis tenetur, aliquid, sint facere cumque aut saepe quas tempore eaque! Corrupti voluptates aliquid ipsa velit iure aspernatur vel distinctio atque accusamus maiores minus doloremque quisquam officiis alias explicabo minima tempore voluptate accusantium, recusandae harum culpa quas adipisci? Similique illo quia beatae autem tempore, provident eveniet unde neque! Atque ad eius similique, error suscipit laborum quasi soluta assumenda molestiae impedit, nam magnam itaque perferendis voluptates placeat facilis voluptatem cupiditate! Voluptate accusantium quasi ea tempora perspiciatis commodi debitis error esse possimus nihil nemo, vero voluptates molestias?</p>
            </div>
        </>
    )
}
