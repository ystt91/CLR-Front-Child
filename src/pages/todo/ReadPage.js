import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {


    const { tno } = useParams()

/*    const navigate = useNavigate()
    const [queryParams] = useSearchParams()

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

    const queryStr = createSearchParams({ page: page, size: size }).toString()

    console.log(tno)

    const moveToModify = (tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr
        }
        )
    }

    const moveToList = () => {
        navigate({
            pathname : `/todo/list`,
            search: queryStr
        })
    }*/

    return (
        <div className="font-extrabold w-full bg-white mt-6">
            <div className={'test-2xl'}>
                Todo Read Page Component {tno}
            </div>

            <ReadComponent tno={tno} />
        </div>
    );
}

export default ReadPage;