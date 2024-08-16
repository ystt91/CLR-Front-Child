import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadPage = () => {

    const navigate = useNavigate()
    const { tno } = useParams()

    const [queryParams] = useSearchParams()

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

    const queryStr = createSearchParams({ page: page, size: size }).toString()

    console.log(tno)

    const moveToModify = (tno) => {
        navigate({
            pathname: `/todo/moidfy/${tno}`,
            search: queryStr
        }
        )
    }

    const moveToList = () => {
        navigate({
            pathname : `/todo/list`,
            search: queryStr
        })
    }

    return (
        <div className={'test-3xl'}>
            Todo Read Page {tno}

            <div>
                <button onClick={() => moveToModify(tno)}>Test Modify</button>
                <button onClick={moveToList}>Test List</button>
            </div>
        </div>
    );
}

export default ReadPage;