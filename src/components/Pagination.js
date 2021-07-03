export const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumber.map(number => {
                    return (
                        <li
                            key={number}
                            className={currentPage === number ? 'page-item-active page-item' : 'page-item'}
                        >
                            <a onClick={() => paginate(number)} htef='!$' className='page-link'>
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
