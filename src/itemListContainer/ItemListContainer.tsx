import { Carta2 } from "@/mock/mock2"

export const ItemListContainer = () => {


    return (
        <>
            <div>
                <div className='mt-2'>
                    <h2 id='entradas' className=" titulo bg-cyan-500 uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-sm rounded-r-sm " style={{ textShadow: '0px 1px 1px #000' }}>🥟 Entradas</h2>
                    {
                        Carta2.entradas.map((menu, i) => (
                            <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end border-b-2'>
                                <div>
                                    <p className="underline tracking-widest">{menu.name}</p>
                                    {menu.variante && menu.variante.map(menu => (
                                        <p key={menu} className="text-sm text-gray-700 pt-1">{menu}</p>
                                    )) }
                                    <p className="text-sm text-gray-900 font-light pt-1">{menu.ingredientes}</p>
                                </div>
                                <div>
                                <p className="pl-5">$2000</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-2'>
                    <h2 id='platoPrincipal' className=" titulo bg-cyan-500 uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-sm rounded-r-sm " style={{ textShadow: '0px 1px 1px #000' }}>🍜 plato principal</h2>
                    {
                        Carta2["plato principal"].map((menu, i) => (
                            <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end border-b-2'>
                                <div>
                                    <p className="underline tracking-widest">{menu.name}</p> 
                                    <p className="text-sm text-gray-900 font-light pt-1">{menu.ingredientes}</p>
                                </div>
                                <div>
                                    <p className="pl-5">$2000</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-2'>
                    <h2 id='platoPrincipal' className=" titulo bg-cyan-500 uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-sm rounded-r-sm " style={{ textShadow: '0px 1px 1px #000' }}>🍮 postres</h2>
                    {
                        Carta2.postres.map((menu, i) => (
                            <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end border-b-2'>
                                <div>
                                    <p className="underline tracking-widest">{menu.name}</p> 
                                    <p className="text-sm text-gray-900 font-light pt-1">{menu.ingredientes}</p>
                                </div>
                                <div>
                                    <p className="pl-5">$2000</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil quam id accusamus voluptates odit quasi tempora delectus suscipit ipsum ipsam aperiam alias? Minima at dignissimos, laborum voluptatibus blanditiis rerum nulla delectus facere sed distinctio fugiat corporis, aspernatur, nostrum perspiciatis provident. Error temporibus, at reiciendis exercitationem, unde excepturi sequi sapiente placeat quos magnam cum quidem quasi ab ipsam iure fuga hic doloremque architecto! Accusamus, libero? Porro beatae quasi quisquam dicta repellendus perspiciatis maiores ducimus, iure autem fuga ratione amet voluptatem? Corrupti repellat unde tempore rerum impedit, tempora aliquid rem quasi nam doloribus exercitationem debitis beatae, voluptatem voluptas deleniti ut accusamus numquam inventore explicabo distinctio, provident praesentium consectetur veniam? Nulla sed sapiente rerum ab illum. Fugiat esse velit nam ducimus libero tempora in illo quaerat quia facilis obcaecati assumenda minima nostrum aut commodi cumque aliquam, cum voluptatem aliquid quasi. Neque quisquam, eveniet inventore odit beatae aspernatur hic placeat dolorum consectetur ducimus? Doloremque blanditiis id aliquid veritatis cupiditate quia eius deleniti quibusdam non. Totam labore, minima beatae ipsam explicabo incidunt ratione minus sint odio excepturi blanditiis nostrum aliquam modi itaque laborum ex architecto iusto hic non? Hic dolor soluta ab aliquam nobis tempora explicabo ad dolorem, deserunt velit ducimus ratione, dolorum quas vitae totam suscipit asperiores! Suscipit cupiditate iste ratione minima rem. Et facere nulla quibusdam, temporibus pariatur minima a ipsum ducimus deleniti iste quis, laudantium at mollitia possimus optio. Doloribus, quod? Reiciendis eligendi distinctio quos natus aliquam dolorum eveniet ipsa ut inventore fugiat temporibus esse, suscipit possimus quibusdam illo in quam! Voluptatem illo eum debitis, consequuntur ad perspiciatis modi animi laborum quae aliquam nostrum dicta quaerat omnis alias dolor numquam pariatur! Eum qui sequi sapiente soluta dolorum cupiditate vero ea est exercitationem temporibus perferendis adipisci assumenda tempore facere quasi, velit distinctio? Fuga sed tempore, aliquid velit magnam excepturi assumenda debitis in reprehenderit a! Fugiat, eveniet vel animi perspiciatis magni repudiandae. Officia officiis odit non ad quisquam dolorum explicabo voluptates veritatis unde recusandae. Corrupti, illo mollitia optio necessitatibus perspiciatis quaerat aperiam consequatur eligendi iusto, qui fugit harum, laborum quam veritatis autem. Natus eos tempora rerum vel error nemo eum repudiandae sint earum. Itaque, eum corrupti, nulla possimus illo vitae fugiat similique nostrum iste aperiam quam asperiores? Ipsa est alias ut cum reiciendis quo molestiae veniam accusantium modi necessitatibus, dolores illo, obcaecati sapiente laboriosam! Ipsam debitis itaque natus laborum voluptatibus consectetur dolores unde aut necessitatibus fuga excepturi beatae, laboriosam dolore voluptatum quaerat aperiam officiis id vel soluta nobis quos ratione libero? Dolor minus ducimus consequatur ratione labore doloremque officiis tenetur, aliquid, sint facere cumque aut saepe quas tempore eaque! Corrupti voluptates aliquid ipsa velit iure aspernatur vel distinctio atque accusamus maiores minus doloremque quisquam officiis alias explicabo minima tempore voluptate accusantium, recusandae harum culpa quas adipisci? Similique illo quia beatae autem tempore, provident eveniet unde neque! Atque ad eius similique, error suscipit laborum quasi soluta assumenda molestiae impedit, nam magnam itaque perferendis voluptates placeat facilis voluptatem cupiditate! Voluptate accusantium quasi ea tempora perspiciatis commodi debitis error esse possimus nihil nemo, vero voluptates molestias?</p> */}
            </div>
        </>
    )
}
