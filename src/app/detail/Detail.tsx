import React, {FunctionComponent} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import DetailMap from "@/app/detail/DetailMap";
import Headline from "@/app/components/Headline/Headline";
import ImageSection from "@/app/detail/ImageSection";
import {TrailDetail} from "@/app/api/fetchTrail";

type DetailProps = {
    trailDetails: TrailDetail
}

const Detail: FunctionComponent<DetailProps> = ({trailDetails}) => {
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
                        <Button>Download GPX</Button>
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
                    <Headline>Beschreibung</Headline>
                    <div dangerouslySetInnerHTML={{__html:  trailDetails.description}}></div>
                </Col>
            </Row>
            {trailDetails.technique.length > 0 && (
                <Row>
                    <Col>
                        <Headline>Technik</Headline>
                        {trailDetails.technique}
                    </Col>
                </Row>
            )}
            {trailDetails.todo.length > 0 && (
                <Row>
                    <Col>
                        <Headline>Todo</Headline>
                        {trailDetails.todo}
                    </Col>
                </Row>
            )}
            {trailDetails.images.length > 0 && <ImageSection images={trailDetails.images} />}

        </>
    )
};

export default Detail;