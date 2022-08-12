import { GithubContext } from "../../context";
import { Pie, Bar, Column, Doughnut } from "../Charts";
import { useContext } from "react";

export const Repos = () => {
    const { repos } = useContext(GithubContext)

    const languages = repos.reduce((total: any, item: any) => {
        const { language, stargazers_count } = item
        if (!language) return total
        if (!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count }
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            }
        }
        return total
    }, {})
    const mostUsed = Object.values(languages).sort((a: any, b: any) => {
        return b.value - a.value
    }).slice(0, 5)
    const mostPopular = Object.values(languages).sort((a: any, b: any) => {
        return b.stars - a.stars
    }).map((item: any) => {
        return { ...item, value: item.stars }
    }).slice(0, 5)
    let { stars, forks } = repos.reduce(
        (total:any, item:any) => {
            const { stargazers_count, name, forks } = item;
            total.stars[stargazers_count] = { label: name, value: stargazers_count };
            total.forks[forks] = { label: name, value: forks };
            return total;
        },
        {
            stars: {},
            forks: {},
        }
    );
    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();

    return (
        <section className="section">
            <div className="grid justify-center">
                <Pie data={mostUsed} />
                <Column data={stars} />
                <Doughnut data={mostPopular} />
                <Bar data={forks} />
            </div>
        </section>
    )
}