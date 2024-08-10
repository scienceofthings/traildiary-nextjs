import React, {FunctionComponent} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import DetailMap from "@/app/detail/[trailId]/DetailView/DetailMap";
import Headline from "@/app/components/Headline/Headline";
import {TrailDetail} from "@/app/api/fetchTrail";
import {ImageSection} from "@/app/detail/[trailId]/DetailView/ImageSection";

type DetailViewProps = {
    trailDetails: TrailDetail
}

const DetailView: FunctionComponent<DetailViewProps> = ({trailDetails}) => {
    return (
        <>
            <Row>
                <Col>
                    <DetailMap trail={trailDetails} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href={trailDetails.gpx_file_name} download>
                        <Button className={"mt-2"}>Download GPX</Button>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Headline as="h1">{trailDetails.title}</Headline>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Headline as={"h2"}>Beschreibung</Headline>
                    <div dangerouslySetInnerHTML={{__html:  trailDetails.description}}></div>
                </Col>
            </Row>
            {trailDetails.technique.length > 0 && (
                <Row>
                    <Col>
                        <Headline as={"h2"}>Technik</Headline>
                        {trailDetails.technique}
                    </Col>
                </Row>
            )}
            {trailDetails.todo.length > 0 && (
                <Row>
                    <Col>
                        <Headline as={"h2"}>Todo</Headline>
                        {trailDetails.todo}
                    </Col>
                </Row>
            )}
            {trailDetails.images.length > 0 && <ImageSection images={trailDetails.images} />}

        </>
    )
};

export default DetailView;