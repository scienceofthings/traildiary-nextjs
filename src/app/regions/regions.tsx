import React from 'react';
import {Trail} from "@/app/api/fetchTrail";
import {Region} from "@/app/api/fetchRegions";
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Headline from "@/app/components/Headline/Headline";
import Link from "next/link";

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
                    <Headline>Keine Region gefunden. </Headline>
                ) : (
                    <>
                        <Headline>
                            Alle Regionen
                        </Headline>
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
                            <div className="pt-8" key={region.id}>
                                <h2 id={`region${region.id}`}>{region.title}</h2>
                                <ListGroup>
                                    {getTrailsForRegion(region.id).length === 0 && <ListGroupItem>Keine Trails für diese Region vorhanden.</ListGroupItem>}
                                    {getTrailsForRegion(region.id).map((trail) => (
                                        <ListGroupItem key={trail.id}>
                                            <Link href={(`/trails/${trail.id}`)}>
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