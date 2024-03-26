import Votes from "../../pages/votes-ms/votes/Votes";
import {Route} from "react-router-dom";
import ReadVote from "../../pages/votes-ms/votes/ReadVote";
import EditVote from "../../pages/votes-ms/votes/EditVote";
import NewVote from "../../pages/votes-ms/votes/NewVote";

export const votesRoutes = [
    <Route path="votes" element={<Votes />} />,
    <Route path="votes/:voteId" element={<ReadVote/>} />,
    <Route path="votes/:voteId/edit" element={<EditVote/>} />,
    <Route path="votes/new" element={<NewVote />} />
]