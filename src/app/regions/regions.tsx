import React from 'react';
import {Region} from "@/app/api/fetchRegions";
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Headline from "@/app/components/Headline/Headline";
import Link from "next/link";
import {Trail} from "@/app/api/fetchTrails";

type RegionProps = {
    trails: Trail[]
    regions: Region[]
}

const Regions: React.FunctionComponent<RegionProps> = ({trails, regions}) => {
    const getTrailsForRegion = (id: number): Trail[] => {
        if (trails === undefined) return []
        return trails.filter((trail) => trail.region === id)
    }
    return (
        <Row>
            <Col>
                {regions.length === 0 ? (
                    <Headline as={"h2"}>Keine Region gefunden. </Headline>
                ) : (
                    <>
                        <ListGroup>
                            {regions.map((region) => (
                                <ListGroupItem key={region.id}>
                                    <a href={`/regions#region${region.id}`}>
                                        {region.title}
                                    </a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                        {regions.map((region) => (
                            <div key={region.id}>
                                <Headline as={"h2"} id={`region${region.id}`}>{region.title}</Headline>
                                <ListGroup>
                                    {getTrailsForRegion(region.id).length === 0 && <ListGroupItem>Keine Trails für diese Region vorhanden.</ListGroupItem>}
                                    {getTrailsForRegion(region.id).map((trail) => (
                                        <ListGroupItem key={trail.id}>
                                            <Link href={(`/detail/${trail.id}`)}>
                                                {trail.title}
                                            </Link>
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </div>
                        ))
                        }
                    </>
                )}
            </Col>
        </Row>
    );
};

export default Regions;